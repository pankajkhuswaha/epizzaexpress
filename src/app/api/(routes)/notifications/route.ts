import dbconnect from "@/configs/dbconnect";
import Notification from "@/models/notification.model";
import { NextRequest, NextResponse } from "next/server";

dbconnect();
export const GET = async () => {
  const notifications = await Notification.find();
  return NextResponse.json(notifications);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const newNotification = await Notification.create(body);
  return NextResponse.json({
    message: "Notification is created successfully.",
    notification: newNotification,
  });
};
