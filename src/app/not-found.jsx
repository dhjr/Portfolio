import Link from "next/link";
import { MoveLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"></div>
            <AlertTriangle
              size={80}
              className="text-emerald-500 relative z-10"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <h1 className="text-8xl font-bold font-1bricolage text-zinc-900 dark:text-zinc-100">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
            Page not found
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-1spaceGrotesk">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or doesn't exist.
          </p>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium transition-transform hover:scale-105 active:scale-95"
          >
            <MoveLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
