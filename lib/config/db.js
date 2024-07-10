import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://Dhani:Dhannn22@cluster0.s5f1ben.mongodb.net/todo-app')
    console.log("DB Connected");
}