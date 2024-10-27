
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="m-2">
      <div className="rounded-3xl bg-gradient-to-tl to-teal-600 from-teal-800 text-3xl p-4 border-b-8 border-r-4 justify-between flex font-black text-slate-300 border-emerald-900">
        <h1 className="pl-56">PORTFOLIO</h1>

        <nav className="text-sm space-x-3 justify-end">
          <Link href="/about" className="hover:text-emerald-200 hover:underline">ABOUT</Link>
          <Link href="/contact" className="hover:text-emerald-200 hover:underline">CONTACT</Link>
          <Link href="/service" className="hover:text-emerald-200 hover:underline">SERVICE</Link>

        </nav>
      </div>
    </div>
  );
}
