import { ExpressRouterAdapter } from '../adapters/express-router-adapter'
import express from 'express'
import LoginRouterFactory from '../factories/login-router-factory'
import SignupRouterFactory from '../factories/signup-router-factory'


export default function(router: express.Router) {
  router.post('/login', ExpressRouterAdapter.adapt(LoginRouterFactory.make()))
  router.post('/signup', ExpressRouterAdapter.adapt(SignupRouterFactory.make()))
}