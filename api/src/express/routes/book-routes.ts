import express from 'express'
import { ExpressRouterAdapter } from '../adapters/express-router-adapter'
import CreateBookRouterFactory from '../factories/create-book-router-factory'

export default function(router: express.Router) {
  router.post('/books', ExpressRouterAdapter.adapt(CreateBookRouterFactory.make()))
}