import dbconnect from "@/configs/dbconnect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

dbconnect();
export const GET = async () => {
  const db = mongoose.connection.db;
  try {
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
