import bcrypt from 'bcrypt'

export default class Encrypter {
  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
  async hash (value: string): Promise<string> {
    const hashed = await bcrypt.hash(value, 10)
    return hashed
  }
}