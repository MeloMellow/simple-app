import { IRouterProtocol } from "../../presentation/protocols/router-protocol";
import express from "express";

export class ExpressRouterAdapter {
  static adapt(router: IRouterProtocol) {
    return async (req: express.Request, res: express.Response) => {
      let httpRequest = {
        headers: req.headers,
        body: req.body,
        params: req.params,
      };
      const httpResponse = await router.route(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    };
  }
}
