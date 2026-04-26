import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'demo.db',
  logging: false,
})

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
})

await sequelize.sync()

const user = await User.create({ name: 'John', email: 'john@example.com' })
const users = await User.findAll()
console.log(users)

await User.destroy({ where: { id: user.id } })