// import Image from "next/image";
// import LikeButton from "./likebutton";
// import movies from "../page.jsx";
// export default async function MovieList() {
//     // Simulate slow data fetching
//     await new Promise((resolve) => setTimeout(resolve, 3000));

    // const response = await fetch(
    //     "https://fooapi.com/api/movies/"
    // );

    // const result = await response.json();

    // const movies = result.data;

//     return (
//         <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
//             {movies.map((movie) => (
//                 <div
//                     key={movie.id}
//                     className="bg-white p-4 rounded shadow"
//                 >
//                     <h2 className="text-2xl font-semibold">
//                         {movie.title}
//                     </h2>

//                     <p className="mt-2 text-gray-600">
//                         {movie.plot}
//                     </p>

//                     <p className="mt-2 text-gray-500">
//                         Release Date: {movie.released}
//                     </p>

//                     <p className="mt-2 text-gray-500">
//                         Rating: {movie.imdbRating}
//                     </p>

//                     <Image
//                         src={movie.poster}
//                         alt={movie.title}
//                         className="mt-4 w-full h-auto rounded"
//                         width={300}
//                         height={450}
//                     />

//                     <LikeButton />
//                 </div>
//             ))}
//         </div>
//     );
// }


import Image from "next/image";
import LikeButton from "./likebutton";
import { movies } from "./page";

export default async function MovieList() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    className="bg-white p-4 rounded shadow"
                >
                    <h2 className="text-2xl font-semibold">
                        {movie.title}
                    </h2>

                    <p className="mt-2 text-gray-600">
                        {movie.description}
                    </p>

                    <p className="mt-2 text-gray-500">
                        Release Date: {movie.releaseDate}
                    </p>

                    <p className="mt-2 text-gray-500">
                        Rating: {movie.rating}
                    </p>

                    <Image
                        src={movie.poster}
                        alt={movie.title}
                        className="mt-4 w-full h-auto rounded"
                        width={300}
                        height={450}
                    />

                    <LikeButton />
                </div>
            ))}
        </div>
    );
}