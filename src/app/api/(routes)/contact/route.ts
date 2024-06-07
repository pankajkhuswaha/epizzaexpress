import dbconnect from "@/configs/dbconnect";
import ContactUs from "@/models/conatctus.model";
import { NextRequest, NextResponse } from "next/server";

dbconnect();
export const GET = async () => {
  const conatctuss = await ContactUs.find();
  return NextResponse.json(conatctuss);
};

export const POST = async (req: NextRequest) => {
  const formdata = await req.formData();
  const name = formdata.get("name");
  const email = formdata.get("email");
  const mobile = formdata.get("mobile");
  const topic = formdata.get("topic");
  const message = formdata.get("message");
  const newConatctus = await ContactUs.create({name,email,mobile,topic,message});
  return NextResponse.json({
    message: "Contact request is sent successfully.",
    conatctus: newConatctus,
  });
};
