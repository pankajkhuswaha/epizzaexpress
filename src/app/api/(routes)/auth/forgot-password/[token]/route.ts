import dbconnect from "@/configs/dbconnect";
import User from "@/models/user.model";
import { hashPassword } from "@/utils";
import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

dbconnect();
export const GET = async (
  req: NextRequest,
  { params }: { params: Record<string, string> }
) => {
  const token = params.token;
  const hashToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashToken,
    passwordResetExpire: {
      $gt: Date.now(),
    },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Token  Expired! Please Try to send mail again." },
      { status: 400 }
    );
  }
  return NextResponse.json(user.email);
};

export const POST = async (
  req: NextRequest,
  { params }: { params: Record<string, string> }
) => {
  const { password } = await req.json();

  const token = params.token;
  const hashToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashToken,
    passwordResetExpire: {
      $gt: Date.now(),
    },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Token  Expired Please Try again" },
      { status: 400 }
    );
  }
  const newHassedPassword = await hashPassword(password);
  user.password = newHassedPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpire = undefined;
  await user.save();
  return NextResponse.json({ message: "Password was changed Sucessfully !" });
};
