export const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller about dreams within dreams.",
    releaseDate: "2010-07-16",
    rating: 8.8,
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "Batman faces the Joker in this action-packed superhero film.",
    releaseDate: "2008-07-18",
    rating: 9.0,
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A journey through space and time in search of a new home for humanity.",
    releaseDate: "2014-11-07",
    rating: 8.6,
  },
];

export default function Movies() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Movie Explorer</h1>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {movies.map((movie) => (
                    <div key={movie.id} className="bg-white p-4 rounded shadow">
                        <h2 className="text-2xl font-semibold">{movie.title}</h2>
                        <p className="mt-2 text-gray-600">{movie.description}</p>   
                        <p className="mt-2 text-gray-500">Release Date: {movie.releaseDate}</p>
                        <p className="mt-2 text-gray-500">Rating: {movie.rating}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}   