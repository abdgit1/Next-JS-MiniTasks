import { NextResponse } from "next/server";

export function proxy(request) {
    console.log("PROXY RUNNING:", request.nextUrl.pathname);

    const token = request.cookies.get("token");

    if (!token) {
        console.log("NO TOKEN");

        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }

    console.log("TOKEN FOUND");

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};