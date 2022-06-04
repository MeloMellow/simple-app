import { User, Book } from "./infra/repositories/typeorm/entity";
import { AppDataSource } from "./infra/repositories/typeorm/data-source";

const user = new User()

user.name = "Rafael"
user.email = "rafael@rafael.com"
user.password = "rafael"

const book = new Book()

book.date = new Date()
book.description = "Nada"
book.title = "Super Livro"

const book2 = new Book()

book2.date = new Date()
book2.description = "Nada 2"
book2.title = "Super Livro 2"

AppDataSource.manager.save(book)
AppDataSource.manager.save(book2)

user.books = []
user.books.push(book)
user.books.push(book2)
AppDataSource.manager.save(user)
