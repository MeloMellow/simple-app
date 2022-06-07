import { InvalidParamError, MissingParamError } from "../../utils/errors";
import { IHttpResponse, HttpResponse } from "../http-response";
import EmailValidator from "../../utils/email-validator";
import { IHttpRequest } from "../http-request";
import { ICreateUserUseCase } from "../../domain/usecases/user/index";
import { IRouterProtocol } from "../protocols/router-protocol";

export default class SignupRouter implements IRouterProtocol {
  constructor(
    private readonly createUserUseCase: ICreateUserUseCase,
    private readonly emailValidator: EmailValidator
  ) {}

  async route(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { name, email, password } = httpRequest.body;
      if (!name) {
        return HttpResponse.badRequest(new MissingParamError("name"));
      }
      if (!email) {
        return HttpResponse.badRequest(new MissingParamError("email"));
      }
      if (!this.emailValidator.isValid(email)) {
        return HttpResponse.badRequest(new InvalidParamError("email"));
      }
      if (!password) {
        return HttpResponse.badRequest(new MissingParamError("password"));
      }
      const user = await this.createUserUseCase.create({
        name,
        email,
        password,
      });
      if (!user) {
        return HttpResponse.conflictError();
      }
      return HttpResponse.ok({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      console.log(error);
      return HttpResponse.serverError();
    }
  }
}
