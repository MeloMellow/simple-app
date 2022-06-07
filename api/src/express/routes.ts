import express, { Router } from 'express'
import authRoutes from './routes/login-routes'
import authMiddleware from './middlewares/auth'
import bookRoutes from './routes/book-routes'

export default function router(app: express.Application) {
  const apiPath = '/api/v1'
  const authPath = apiPath+'/auth'
  app.use(authPath, authMiddleware)

  const loginRoute = Router()
  authRoutes(loginRoute)
  app.use(apiPath, loginRoute)

  const bookRoute = Router()
  bookRoutes(bookRoute)
  app.use(authPath, bookRoute)
}