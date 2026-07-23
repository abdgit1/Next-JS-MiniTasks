import {movies} from "../page.jsx";
import { notFound } from "next/navigation";
import Image from "next/image";



export async function generateMetadata({ params }) {
    const { id } = await params;
    const movie = movies.find((movie) => movie.id === parseInt(id));

    if (!movie) {
        return {
            title: "Movie Not Found",
            description: "The requested movie could not be found.",
        };
    }
    return {
        title: movie.title + " - Movie Explorer",
        description: movie.description,
    };
}

export default async function MovieDetails({ params }) {
  const { id } = await new Promise((resolve) => setTimeout(() => resolve(params), 1000)); // Simulate a delay for loading state
  const movie = movies.find((movie) => movie.id === parseInt(id));



    if (!movie) {
            notFound();

    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{movie.description}</p>
            <p className="mt-2 text-gray-500">Release Date: {movie.releaseDate}</p>
            <p className="mt-2 text-gray-500">Rating: {movie.rating}</p>
            <Image src={movie.poster} alt={movie.title} width={300} height={450}
            />
        </main>
    );
}

