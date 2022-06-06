// import { DataSource, Repository } from 'typeorm'
// import { AppDataSource } from './infra/repositories/typeorm/data-source'
// import { UserEntity, BookEntity } from './infra/repositories/typeorm/entity'


// async function execute() {
//   const user = new User()

//   user.name = "Rafael"
//   user.email = "rafael@rafael.com"
//   user.password = "rafael"
  
//   // const book = new Book()
  
//   // book.date = new Date()
//   // book.description = "Nada"
//   // book.title = "Super Livro"
  
//   // const book2 = new Book()
  
//   // book2.date = new Date()
//   // book2.description = "Nada 2"
//   // book2.title = "Super Livro 2"
  
//   // await AppDataSource.manager.save(book)
//   // await AppDataSource.manaDataSourcesave<User>(user)
  
// }

// execute()
// let userRepository: Repository<User>
// AppDataSource.initialize()
//     .then(async () => {
//       userRepository = AppDataSource.getRepository(User)
//     })
//     .catch((error) => console.log(error)).then(async ()=>{
//       const user = await userRepository.findOneBy({
//         name: 'Rafael',
//       })
//       console.log(user)
//     })

// class Test{
//   async func(AppDataSource: DataSource): Promise<UserEntity | null>{
//     const response = await AppDataSource.initialize()
//     .then(async (): Promise<UserEntity | null> => {
//       let userRepository = AppDataSource.getRepository(UserEntity)
//       const user = await userRepository.findOneBy({
//         name: 'Rafael',
//       })
//       return user
//     })
//     .catch((error) => console.log(error)) || null
//     return response
//   }
// }
// async function app(){
//   const test = new Test()
//   const user = await test.func(AppDataSource)
//   console.log(user)
// }
// app()

import 'dotenv/config'

import app from './express'

app.listen(process.env.PORT || 3434, () => {
  console.log(`server running at http://localhost:${process.env.PORT || 3434}`)
})