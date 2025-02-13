import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="m-2">
      <div className="rounded-3xl bg-gradient-to-tl to-teal-600 from-teal-800 text-2xl p-4 border-b-8 border-r-4 flex flex-wrap items-center justify-between font-black text-slate-300 border-emerald-900">
        
        {/* Portfolio Title */}
        <h1 className="text-center sm:text-left w-full sm:w-auto sm:pl-6">
          PORTFOLIO
        </h1>

        {/* Navigation Links */}
        <nav className="flex space-x-4 text-sm sm:text-base">
          <Link href="/about" className="hover:text-emerald-200 hover:underline">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-emerald-200 hover:underline">
            CONTACT
          </Link>
          <Link href="/service" className="hover:text-emerald-200 hover:underline">
            SERVICE
          </Link>
        </nav>

      </div>
    </div>
  );
}
