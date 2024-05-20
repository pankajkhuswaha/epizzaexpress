import dbconnect from "@/configs/dbconnect";
import { createJwtToken } from "@/configs/jwt";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


dbconnect();
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = await User.findOne({ email: body.email });
    if (!user)
      return NextResponse.json(
        { message: "Look's like you are not registed with us." },
        { status: 404 }
      );

    const isCorrectPassword = await bcrypt.compare(
      body.password,
      user.password
    );

    if (isCorrectPassword) {
      const token = createJwtToken({ id: user._id }, "1h");
      cookies().set("token", token);
      return NextResponse.json({ message: "Login successfull." });
    }
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 400 }
    );
  }
}
