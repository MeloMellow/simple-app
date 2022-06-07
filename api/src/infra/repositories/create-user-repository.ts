import { User } from "../../domain/models";
import { ICreateUserRepository } from "../../domain/repositories/create-user-repository";
import { DataSourceOperation, UserEntity } from "./typeorm";

export class CreateUserRepository implements ICreateUserRepository{
  async create(user: User): Promise<User | null> {
    await DataSourceOperation(async (DataSource)=>{
      const userRepository = DataSource.getRepository(UserEntity)
      if(!userRepository){
        return
      }
      const isEmailAlreadyInUse = await userRepository.findOneBy({email: user.email})
      if(isEmailAlreadyInUse){
        return
      }
      let userData = new UserEntity()
      userData.name = user.name
      userData.email = user.email
      userData.password = user.hashedPassword
      await userRepository.save(userData)
      user.id = userData.id
      })
    if(!user.id){
      return null
    }
    return user
  }
}