import bcrypt from 'bcrypt'

export default class Encrypter {
  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}