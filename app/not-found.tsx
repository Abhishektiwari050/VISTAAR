import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
            <div className="absolute h-full w-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            <h2 className="text-9xl font-bold text-neutral-800 z-10">404</h2>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 z-10 mt-4">
                Page Not Found
            </h1>
            <p className="text-neutral-400 mt-4 max-w-lg text-center z-10 text-lg">
                The page you are looking for does not exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-8 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors z-10"
            >
                Return Home
            </Link>
        </div>
    )
}
