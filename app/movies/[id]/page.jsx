import {movies} from "../page.jsx";

export default async function MovieDetails({ params }) {
  const { id } = await params;
  const movie = movies.find((movie) => movie.id === parseInt(id));



    if (!movie) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold">Movie Not Found</h1>
                <p className="mt-4 text-lg text-gray-600">
                    The movie you are looking for does not exist.
                </p>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{movie.description}</p>
            <p className="mt-2 text-gray-500">Release Date: {movie.releaseDate}</p>
            <p className="mt-2 text-gray-500">Rating: {movie.rating}</p>
        </main>
    );
}

