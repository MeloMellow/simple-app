import { CreateBookRepository } from './infra/repositories/create-book-repository'

import 'dotenv/config'

import app from './express'

app.listen(process.env.PORT || 3434, async () => {
  console.log(`server running at http://localhost:${process.env.PORT || 3434}`)
  const teste = new CreateBookRepository()
  const book = {
    title: 'Teste 2222',
    description: 'A test book GGGZADADSFGA',
    date: new Date(),
    userId: '67c58ffb-145f-4e3d-9f60-cd0e2e98f38d'
  }
  await teste.create(book)
})