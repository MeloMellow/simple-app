import { IHttpRequest } from "../http-request";
import { IHttpResponse } from "../http-response";

export interface IRouterProtocol {
  route(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}
