import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "../../../_utils";
import User from "../../../_models/user.model";
import dbconnect from "../../../_configs/dbconnect";

dbconnect();

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const user = await User.findOne({ email: body.email });
    if (user) {
      return NextResponse.json(
        { message: "Look's like you are already registed with us." },
        { status: 409 }
      );
    }
    const hashedPassword = await hashPassword(body.password);
    const newUser = await User.create({ ...body, password: hashedPassword });
    return NextResponse.json(
      { message: "Signup sucessfull." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 400 }
    );
  }
};
