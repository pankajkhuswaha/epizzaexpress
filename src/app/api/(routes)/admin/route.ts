import dbconnect from "@/configs/dbconnect";
import { verifyJwtToken } from "@/configs/jwt";
import User from "@/models/user.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

dbconnect();
export const GET = async (request:NextRequest) => {
  const db = mongoose.connection.db;
  try {
    const token = await request.cookies.get("token")?.value;
    if(!token){
        return NextResponse.json({ message: "Please Login to continue" }, { status: 401 });
    }
    const decrytedToken = verifyJwtToken(token);
    const user = await User.findById(decrytedToken.id);
    if(user.role != "admin"){
        return NextResponse.json({ message: "UnAuthorized Access" }, { status: 401 });
    }
    const collections = await db.listCollections().toArray();
    const counts: Record<string, number> = {};
    await Promise.all(
      collections.map(async (collection) => {
        const collectionName = collection.name as string;
        const count = await db.collection(collectionName).countDocuments();
        counts[collectionName] = count;
      })
    );
    return NextResponse.json(counts);
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error)?.message },
      { status: 400 }
    );
  }
};
