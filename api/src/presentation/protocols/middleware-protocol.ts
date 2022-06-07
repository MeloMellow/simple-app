import { IHttpRequest } from "../http-request";
import { IHttpResponse } from "../http-response";


export interface IMiddlewareProtocol{
  route (httpRequest: IHttpRequest, httpResponse: IHttpResponse): Promise<boolean>
}