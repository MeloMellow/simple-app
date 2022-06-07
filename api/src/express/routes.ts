import express, { Router } from 'express'
import authRoutes from './routes/login-routes'

export default function router(app: express.Application) {
  const apiPath = '/api/v1'
  const authPath = apiPath+'/auth'
  const loginRoute = Router()
  authRoutes(loginRoute)
  app.use(apiPath, loginRoute)
}