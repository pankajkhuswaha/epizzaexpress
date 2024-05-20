import { NextRequest, NextResponse } from "next/server";
import { Params } from "@/types";
import Product from "@/models/product.model";

export const GET = async (_req: NextRequest, { params }: Params) => {
  const slug = params._id;
  const product = await Product.findOne({ slug });
  return NextResponse.json(product);
};

export const PUT = async (req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const body = await req.json();
  await Product.findByIdAndUpdate(_id, body);
  return NextResponse.json({ message: "Product is updated sucessfully." });
};

export const DELETE = async (_req: NextRequest, { params }: Params) => {
  const _id = params._id;
  const product = await Product.findByIdAndDelete(_id);
  if (product) {
    return NextResponse.json({ message: "Product deleted Successfully." });
  }
  return NextResponse.json(
    { message: "Product of this id is not found." },
    { status: 404 }
  );
};
