import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { token, rol } = await request.json();

    const response = NextResponse.json({
    ok: true,
    message: "Cookie creada correctamente",
    });

    response.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/",
    });

    response.cookies.set("user_rol", rol, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/",
    });

    return response;
}