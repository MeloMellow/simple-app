import { User } from "../../domain/models";
import { ILoadUserByEmailRepository } from "../../domain/repositories/load-user-by-email-repository";
import { DataSourceOperation, UserEntity } from "./typeorm";


export class LoadUserByEmailRepository implements ILoadUserByEmailRepository{
  async load(email: string): Promise<User | null> {
    let user: User | null = null
    await DataSourceOperation(async (DataSource)=>{
      const userRepository = DataSource.getRepository(UserEntity)
      if(!userRepository){
        return
      }
      const userData: UserEntity | null = await userRepository.findOneBy({
        email: email,
      })
      if(!userData){
        return
      }
      user = {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        hashedPassword: userData.password
      }
    })
    return user
  }
}