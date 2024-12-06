import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col  items-center p-24">
      <span className="text-5xl">Hola mundo</span>
      <Link href="/about">
        <span className="text-2xl text-blue-500 hover:text-blue-700">
          Go to about
        </span>
      </Link>
    </main>
  );
}
