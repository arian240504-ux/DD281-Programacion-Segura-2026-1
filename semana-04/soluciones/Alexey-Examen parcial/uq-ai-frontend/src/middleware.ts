import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("auth_token")?.value;
    const { pathname } = request.nextUrl;

    const rutasProtegidas = ["/dashboard", "/admin"];
    const esRutaProtegida = rutasProtegidas.some((ruta) =>
    pathname.startsWith(ruta)
    );

    if (esRutaProtegida && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*"],
};