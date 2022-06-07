import jwt from 'jsonwebtoken'
import { MissingParamError } from './errors'

export default class TokenGenerator {
  private secret?: string
  constructor (secret?: string) {
    this.secret = secret || process.env.JWT_SECRET
  }

  generate (userId: String, name: string, email: string): string {
    if (!this.secret) {
      throw new MissingParamError('jwtSecret')
    }
    return jwt.sign({ userId, name, email }, this.secret)
  }
}