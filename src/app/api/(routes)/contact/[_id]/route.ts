import { NextRequest, NextResponse } from "next/server";
import { Params } from "@/types";
import Conatctus from "@/models/conatctus.model";
import dbconnect from "@/configs/dbconnect";
dbconnect();
export const GET = async (_req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const conatctus = await Conatctus.findOne({ _id });
  return NextResponse.json(conatctus);
};

export const PUT = async (req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const body = await req.json();
  await Conatctus.findByIdAndUpdate(_id, body);
  return NextResponse.json({ message: "Conatctus is updated sucessfully." });
};

export const DELETE = async (_req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const conatctus = await Conatctus.findByIdAndDelete(_id);
  if (conatctus) {
    return NextResponse.json({ message: "Conatctus deleted Successfully." });
  }
  return NextResponse.json(
    { message: "Conatctus of this id is not found." },
    { status: 404 }
  );
};
