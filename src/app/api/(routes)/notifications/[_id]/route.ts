import { NextRequest, NextResponse } from "next/server";
import { Params } from "@/types";
import Notification from "@/models/notification.model";

export const GET = async (_req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const notification = await Notification.findOne({ _id });
  return NextResponse.json(notification);
};

export const PUT = async (req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const body = await req.json();
  await Notification.findByIdAndUpdate(_id, body);
  return NextResponse.json({ message: "Notification is updated sucessfully." });
};

export const DELETE = async (_req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const notification = await Notification.findByIdAndDelete(_id);
  if (notification) {
    return NextResponse.json({ message: "Notification deleted Successfully." });
  }
  return NextResponse.json(
    { message: "Notification of this id is not found." },
    { status: 404 }
  );
};
