import express from 'express'
import { ExpressMiddlewareAdapter } from '../adapters/express-middleware-adapter'

import AuthMiddlewareFactory from '../factories/auth-middleware-factory'

export default async function authMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  await ExpressMiddlewareAdapter.adapt(AuthMiddlewareFactory.make())(req, res, next)
}