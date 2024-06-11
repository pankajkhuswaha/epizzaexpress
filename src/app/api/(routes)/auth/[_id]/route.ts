import { NextRequest, NextResponse } from "next/server";
import { Params } from "@/types";
import User from "@/models/user.model";

export const GET = async (_req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const user = await User.findById(_id);
  return NextResponse.json(user);
};

export const PUT = async (req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const body = await req.json();
  await User.findByIdAndUpdate(_id, body);
  return NextResponse.json({ message: "User is updated sucessfully." });
};

export const DELETE = async (_req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const user = await User.findById(_id);
  if (user.role == "admin") {
    return NextResponse.json(
      { message: "Admin user can not be deleted" },
      { status: 404 }
    );
  }

  const deletedUser = await User.findByIdAndDelete(_id);
  if (deletedUser) {
    return NextResponse.json({ message: "user deleted Successfully." });
  }
  return NextResponse.json(
    { message: "User of this id is not found." },
    { status: 404 }
  );
};
