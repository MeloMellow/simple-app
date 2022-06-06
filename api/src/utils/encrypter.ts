import bcrypt from 'bcrypt'
import { MissingParamError } from './errors'

export default class Encrypter {
  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}