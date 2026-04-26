import mongoose from 'mongoose'

interface IUser extends mongoose.Document {
  name: string
  email: string
}

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
})

const User = mongoose.model<IUser>('User', UserSchema)

await mongoose.connect('mongodb://localhost:27017/demo')

const user = await User.create({ name: 'John', email: 'john@example.com' })
const users = await User.find()
console.log(users)

await User.findByIdAndDelete(user._id)