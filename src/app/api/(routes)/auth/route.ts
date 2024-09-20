import { NextResponse } from "next/server";
import dbconnect from "@/configs/dbconnect";
import User from "@/models/user.model";

export async function GET() {
  try {
    await dbconnect();
    console.log("Database connected successfully");

    const users = await User.find();
    console.log(`Found ${users.length} users`);

    // Add a timestamp to force fresh content
    const timestamp = new Date().toISOString();

    return NextResponse.json({ users, timestamp }, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
        'Pragma': 'no-cache',
      },
    });
  } catch (error) {
    console.error("Error in GET /api/users:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}