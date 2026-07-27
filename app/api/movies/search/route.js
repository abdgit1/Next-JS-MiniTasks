import { movies } from "@/app/movies/page";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const query = searchParams.get("q");

    if (!query) {
        return NextResponse.json(
            { error: "Search query is required" },
            { status: 400 }
        );
    }

    const results = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return NextResponse.json({
        query,
        results,
    });
}