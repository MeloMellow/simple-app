import jwt from 'jsonwebtoken'
import { User } from '../domain/models'
import { MissingParamError } from './errors'

export default class TokenValidator {
  private secret?: string
  constructor (secret?: string) {
    this.secret = secret || process.env.JWT_SECRET
  }

  validate (token: string): {} | null {
    if (!this.secret) {
      throw new MissingParamError('secret')
    }
    try {
      const decoded = jwt.verify(token, this.secret)
      return decoded
    } catch(err) {
      return null
    }
  }
}