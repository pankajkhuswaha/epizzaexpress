import dbconnect from "@/configs/dbconnect";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET() {
  await dbconnect();
  const users = await User.find();
  return NextResponse.json(users);
}
