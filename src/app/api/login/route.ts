import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { password, email } = body;

  if (password === process.env.SECRET_ADMIN_PASSWORD && email === process.env.SECRET_ADMIN_EMAIL) {
    return NextResponse.json({ success: true }, { status: 200 });
  } else {
    return NextResponse.json({ success: false, message: "Incorrect password" }, { status: 401 });
  }
}
