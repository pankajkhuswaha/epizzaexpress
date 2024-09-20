import { verifyGoogleToken } from "@/actions/notification";
import dbconnect from "@/configs/dbconnect";
import { createJwtToken } from "@/configs/jwt";
import User from "@/models/user.model";
import { IUser } from "@/types";
import { hashPassword } from "@/utils";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

dbconnect();
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as IUser;
    const validUser = await verifyGoogleToken(body.token);
    const user = await User.findOne({ email: validUser.email });
    if (user) {
      const token = createJwtToken({ id: user._id }, "5d");
      cookies().set("token", token);
      user.token = token;
      user.save();
      return NextResponse.json({ message: "Login successfull.", user });
    }

    const hashedPassword = await hashPassword("123");
    const newUser = await User.create({
      ...validUser,
      password: hashedPassword,
      emailVerified: true,
    });
    const token = createJwtToken({ id: newUser._id }, "5d");
    newUser.token = token;
    newUser.save();
    cookies().set("token", token);

    return NextResponse.json(
      {
        message:
          "Signup Successfull and your default password is 123. Please change it using forgot password",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid or Unauthorized Access" },
      { status: 401 },
    );
  }
}
