import { NextResponse } from "next/server";
import User from "../../_models/user.model";

export async function GET() {
  const users = await User.find();
  return NextResponse.json(users);
}
