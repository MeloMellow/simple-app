import "reflect-metadata"
import { DataSource } from "typeorm"
import { BookEntity, UserEntity } from "./entity"

function parseNumber(str: String | string | any): number{
  return parseInt(str)
}

function AppDataSource(): DataSource{
  return new DataSource({
    type: "mysql",
    host: process.env.HOST_DB || "localhost",
    port: parseInt(process.env.PORT_DB || '3306'),
    username: process.env.USER_DB || "root",
    password: process.env.PASSWORD_DB ||  "admin",
    database: process.env.DB_NAME || "simple-app",
    entities: [UserEntity, BookEntity],
    synchronize: true,
    logging: false,
  })
}

async function DataSourceOperation(callback: (source: DataSource) => any){
  const DataSourceObject = AppDataSource()
  await DataSourceObject.initialize()
  await callback(DataSourceObject)
  await DataSourceObject.destroy()
}

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap

export { DataSourceOperation }