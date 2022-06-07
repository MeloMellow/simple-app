import express from 'express'
import { ExpressMiddlewareAdapter } from '../adapters/express-middleware-adapter'

import AuthMiddlewareFactory from '../factories/auth-middleware-factory'

export default function authMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  ExpressMiddlewareAdapter.adapt(AuthMiddlewareFactory.make())(req, res, next)
}