import {NextResponse} from "next/server";

export async function POST(request) {
    const { username, password } = await request.json();
    
if (username!== "admin" || password !== "1234") {
        return NextResponse.json(
            { error: "Invalid credentials" },
            { status: 401 }
        );
    }

    // If credentials are valid, set a cookie and return a success response
    const response = NextResponse.json({ message: "Login successful" });
    response.cookies.set("token", "abc123", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // 1 day
         sameSite: "lax",
        path: "/" 
    });
    return response;
}


