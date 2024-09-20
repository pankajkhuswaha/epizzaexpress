import { NextRequest, NextResponse } from "next/server";
import dbconnect from "@/configs/dbconnect";
import User from "@/models/user.model";
import { verifyJwtToken } from "@/configs/jwt";

export async function GET(request:NextRequest) {
  try {
    await dbconnect();
    const token = await request.cookies.get("token")?.value;
    if(!token){
        return NextResponse.json({ message: "Please Login to continue" }, { status: 401 });
    }
    const decrytedToken = verifyJwtToken(token);
    const user = await User.findById(decrytedToken.id);
    if(user.role != "admin"){
        return NextResponse.json({ message: "UnAuthorized Access" }, { status: 401 });
    }

    const users = await User.find();

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