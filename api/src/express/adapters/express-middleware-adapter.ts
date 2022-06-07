import express from 'express'
import { IHttpResponse } from '../../presentation/http-response'
import { IMiddlewareProtocol } from "../../presentation/protocols/middleware-protocol"

export class ExpressMiddlewareAdapter {
  static adapt (middleware: IMiddlewareProtocol) {
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
      let httpRequest = {
        headers: req.headers,
        body: req.body,
        params: req.params
      }
      let httpResponse: IHttpResponse = {
        statusCode: 400,
        body: {}
      }
      const middlewareCheck = await middleware.route(httpRequest, httpResponse)
      req.headers = httpRequest.headers
      req.body = httpRequest.body
      req.params = httpRequest.params
      if(middlewareCheck){
        next()
      }else{
        res.status(httpResponse.statusCode).json(httpResponse.body)
      }
    }
  }
}