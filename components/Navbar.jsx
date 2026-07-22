import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Movie Explorer</h1>
                <div className="space-x-8">
                    <Link href="/" className="text-white hover:text-gray-300">
                        Home
                    </Link>
                    <Link href="/movies" className="text-white hover:text-gray-300">
                        Movies
                    </Link>
                    <Link href="/about" className="text-white hover:text-gray-300">
                        About
                    </Link>
                </div>
            </div>  
        </nav>
    );
}