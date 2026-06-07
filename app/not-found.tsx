import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-center text-white">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">404</p>
        <h1 className="mt-4 text-4xl font-black">Page not found</h1>
        <p className="mt-4 text-slate-300">The page you are looking for does not exist.</p>
        <Link className="mt-8 inline-flex rounded-full bg-white px-5 py-3 font-bold text-slate-950" href="/">Return home</Link>
      </div>
    </main>
  );
}
