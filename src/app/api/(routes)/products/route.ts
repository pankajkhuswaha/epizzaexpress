import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/product.model";
import { slugify } from "@/utils/slugify";

export const GET = async () => {
  const products = await Product.find();
  return NextResponse.json(products);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const product = { ...body, slug: slugify(body.name) };
  const newProduct = await Product.create(product);
  return NextResponse.json({
    message: "Product added sucessfully.",
    product: newProduct,
  });
};
