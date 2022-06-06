import express from 'express'

import TokenValidator from '../../utils/token-validator'
import HttpResponse from '../../presentation/http-response'

export default function contentTypeMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  const tokenValidator = new TokenValidator()
  const token = req.headers.authorization
  if(token && tokenValidator.validate(token)){
    const validatorResponse = tokenValidator.validate(token)
    req.body.authorization = validatorResponse
    next()
  }else{
    const response = HttpResponse.unauthorizedError()
    res.status(response.statusCode).send(response.body)
  }
}