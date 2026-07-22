export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a delay for loading state
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Movie Explorer</h1>
      <p className="mt-4 text-lg text-gray-600">
        Discover and explore your favorite movies!
      </p>
    </main>
  );
}