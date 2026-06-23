import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
    const response = NextResponse.redirect(new URL("/", request.url), 303);

    response.cookies.set("auth_token", "", {
        maxAge: 0,
        path: "/",
    });

    response.cookies.set("user_rol", "", {
        maxAge: 0,
        path: "/",
    });

    return response;
}