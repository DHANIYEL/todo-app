import { NextResponse } from "next/server";
import { ConnectDB } from "../../lib/config/db";

const LoadDB = async () => {
    await ConnectDB()
}

LoadDB();

export async function GET(request){
      toast.success("Success")
    return NextResponse.json({msg:"Get msg"})
}