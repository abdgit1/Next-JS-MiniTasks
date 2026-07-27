import { movies } from "@/app/data/movies";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = await params;

    const movie = movies.find(
        (movie) => movie.id === parseInt(id)
    );

    if (!movie) {
        return NextResponse.json(
            { error: "Movie not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(movie);
}

export async function PUT(request, { params }) {
    const { id } = await params;

    const movieIndex = movies.findIndex(
        (movie) => movie.id === parseInt(id)
    );

    if (movieIndex === -1) {
        return NextResponse.json(
            { error: "Movie not found" },
            { status: 404 }
        );
    }

    const updatedMovie = await request.json();
    movies[movieIndex] = {id: parseInt(id), ...updatedMovie };
    return NextResponse.json({
        message: "Movie updated successfully",
        data: movies[movieIndex]
    });

}

export async function PATCH(request, { params }) {
    const { id } = await params;

    const movieIndex = movies.findIndex(
        (movie) => movie.id === parseInt(id)
    );
    if (movieIndex === -1) {
        return NextResponse.json(
            { error: "Movie not found" },
            { status: 404 }
        );
    }
    const updatedFields = await request.json();
    movies[movieIndex] = { ...movies[movieIndex], ...updatedFields };
    return NextResponse.json({
        message: "Movie updated successfully",
        data: movies[movieIndex]
    });
}

export async function DELETE(request, { params }) {
    const { id } = await params;

    const movieIndex = movies.findIndex(
        (movie) => movie.id === parseInt(id)
    );

    if (movieIndex === -1) {
        return NextResponse.json(
            { error: "Movie not found" },
            { status: 404 }
        );
    }

    movies.splice(movieIndex, 1);
    return NextResponse.json({ message: "Movie deleted successfully" });
}




// export async function DELETE(request, { params }) {
//     const { id } = await params;

//     const movieIndex = movies.findIndex(
//         (movie) => movie.id === parseInt(id)
//     );

//     if (movieIndex === -1) {
//         return NextResponse.json(
//             { error: "Movie not found" },
//             { status: 404 }
//         );
//     }

//     movies.splice(movieIndex, 1);
//     return NextResponse.json({ message: "Movie deleted successfully" });