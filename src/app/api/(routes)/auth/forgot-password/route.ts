import sendEmail from "@/actions/sendEmail";
import dbconnect from "@/configs/dbconnect";
import { resetPasswordMail } from "@/emails/forgot-password";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";


dbconnect();
export const POST = async (req: NextRequest) => {
  const { email } = await req.json();
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { message: "Email is not Registered with us !" },
      { status: 400 }
    );
  }

  // Creating a random token using crypto
  const resettoken = crypto.randomBytes(32).toString("hex");

  // Hashing the token to secure to store in db
  user.passwordResetToken = crypto
    .createHash("sha256")
    .update(resettoken)
    .digest("hex");

  // setting the password reset token expire
  user.passwordResetExpire = Date.now() + 30 * 60 * 1000; //10 minute expire

  await user.save();

  const sendData = resetPasswordMail(resettoken);
  const data = {
    to: email,
    subject: `Password Reset Link from ${process.env.APPLICATION_NAME}`,
    html: sendData,
  };
  await sendEmail(data);
  return NextResponse.json({
    message: "Password reset link is sent to registered email",
  });
};
