import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json({msg:"Get msg"})
}