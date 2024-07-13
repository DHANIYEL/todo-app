import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  console.log("DB Connected");
};

// export async function GET(request) {
//   try {

//     const todos = await TodoModel.find({});
//     return NextResponse.json({ todos: todos });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { error: "Failed to connect to database" },
//       { status: 500 }
//     );
//   } finally {
//     await mongoose.disconnect();
//   }
// }
