import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-end px-20 py-6 relative z-10" style={{ backgroundColor: "#72a0d0" }}>
      <div className="hidden lg:flex items-center gap-8 text-white font-bold text-[1.3rem]">
        <Link href="#about" className="hover:text-blue-200 transition-colors">
          About
        </Link>
        <Link href="#schedule" className="hover:text-blue-200 transition-colors">
          Schedule
        </Link>
        <Link href="#faq" className="hover:text-blue-200 transition-colors">
          FAQ
        </Link>
        <Link href="#sponsors" className="hover:text-blue-200 transition-colors">
          Sponsors
        </Link>
        <Link href="#location" className="hover:text-blue-200 transition-colors">
          Location
        </Link>
        <Link href="/team" className="hover:text-blue-200 transition-colors">
          Team
        </Link>
        <Link href="/past-winners" className="hover:text-blue-200 transition-colors">
          Past Winners
        </Link>
      </div>

      <button className="lg:hidden text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
}
