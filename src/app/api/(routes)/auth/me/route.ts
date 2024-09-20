import { verifyJwtToken } from "@/configs/jwt";
import User from "@/models/user.model";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export const GET = async () => {
  try {
    const tokenCookie = cookies().get("token");
    if (!tokenCookie) {
      return NextResponse.json(
        { message: "Unautorized Please Login Again" },
        { status: 401 },
      );
    }
    const tokenData = verifyJwtToken(tokenCookie.value) as JwtPayload;

    if (tokenData) {
      const user = await User.findById(tokenData.id).select([
        "-password",
        "-isSuper",
        "-createdAt",
        "-updatedAt",
        "-__v",
      ]);
      return NextResponse.json(user);
    }
  } catch (error) {
    cookies().delete("token");
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 400 }
    );
  }
};
