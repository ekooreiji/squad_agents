import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'

const options: DataSourceOptions = {
  type: 'sqlite',
  database: 'demo.db',
  entities: [__dirname + '/entity/*.js'],
  synchronize: true,
}

const AppDataSource = new DataSource(options)
await AppDataSource.initialize()

const userRepo = AppDataSource.getRepository('User')
const user = await userRepo.save(userRepo.create({ name: 'John', email: 'john@example.com' }))

const users = await userRepo.find()
console.log(users)

await userRepo.delete(user.id)