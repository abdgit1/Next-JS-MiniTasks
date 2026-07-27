"use server";

import { movies } from "./page";
import { revalidatePath } from "next/cache";
export async function addMovie(formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const rating = formData.get("rating");

    const newMovie = {
        id: movies.length + 1,
        title,
        description,
        rating: Number(rating),
        releaseDate: "2026-07-27",
        poster: "/Inception.jpg",
    };

    movies.push(newMovie);

    revalidatePath("/movies");

    console.log("Movie added:", newMovie);
}