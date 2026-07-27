import { movies } from "@/app/data/movies";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(movies);
}

export async function POST(request) {
    const newMovie = await request.json();

    // Assign a new ID to the movie (you can use a more robust method in a real application)
    newMovie.id = movies.length + 1;
    movies.push(newMovie);
    return NextResponse.json(newMovie, { status: 201 });
}