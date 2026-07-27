import { NextResponse } from "next/server";

export async function POST(request) {
    const formData = await request.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const rating = formData.get("rating");
    const releaseDate = "2026-07-27"; // You can modify this as needed
    const file = formData.get("poster");

    if (!file) {
        return NextResponse.json(
            { error: "No file uploaded" },
            { status: 400 }
        );
    }

    if (!file.type.startsWith("image/")) {
        return NextResponse.json(
            { error: "Only image files are allowed" },
            { status: 400 }
        );
    }

    return NextResponse.json({
        message: "Movie and file received successfully",

        movie: {
            title,
            description,
            rating: Number(rating),
            releaseDate,
        },

        file: {
            name: file.name,
            type: file.type,
            size: file.size,
        },
    });
}