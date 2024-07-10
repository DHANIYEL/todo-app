import { NextResponse } from "next/server";
import { ConnectDB } from "../../lib/config/db";
import { TodoModel } from "@/lib/model/TodoModel";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  return NextResponse.json({ msg: "Get msg" });
}
export async function POST(request) {
  const { title, description } = await request.json();
  await TodoModel.create({
    title,
    description
  })

  return NextResponse.json({ msg: "Todo created" });
}