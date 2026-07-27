import Image from "next/image";
import Likebutton from "./likebutton";
import { Suspense } from "react";
import MovieList from "./movieslist";
import { addMovie } from "./actions";

export const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller about dreams within dreams.",
    releaseDate: "2010-07-16",
    rating: 8.8,
    poster:"/Inception.jpg"
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "Batman faces the Joker in this action-packed superhero film.",
    releaseDate: "2008-07-18",
    rating: 9.0,
    poster:"/Dark Knight.jpg"
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A journey through space and time in search of a new home for humanity.",
    releaseDate: "2014-11-07",
    rating: 8.6,
    poster:"/Interstellar.jpg"
  },
];



function MovieListLoading() {
    return (
        <div className="mt-8">
            <p className="text-xl">
                Loading movies...
            </p>
        </div>
    );
}

export default async function Movies() {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a delay for loading state
    return (
        <main className="flex min-h-screen flex-col items-center p-24">

            <h1 className="text-4xl font-bold">
                Movie Explorer
            </h1>

            <p className="mt-4 text-gray-600">
                Welcome to Movie Explorer
            </p>

            <form
    action="/api/upload"
    method="POST"
    encType="multipart/form-data"
    className="mt-8 flex flex-col items-center space-y-4"
>

            {/* <form
                action={addMovie}
                className="mt-8 flex flex-col items-center space-y-4"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Movie Title"
                    className="w-64 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Movie Description"
                    className="w-64 p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Movie Rating"
                    className="w-64 p-2 border border-gray-300 rounded"
                />

                <input
        type="file"
        name="poster"
        accept="image/*"
        className="w-64 p-2 border border-gray-300 rounded"
    />


                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add Movie
                </button>
            </form>

            <Suspense fallback={<MovieListLoading />}>
                <MovieList />
            </Suspense>

        </main>
    );
}
