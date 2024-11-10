import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="m-2">
      <div className="rounded-3xl bg-gradient-to-tl to-teal-600 from-teal-800 text-3xl p-4 border-b-8 border-r-4 justify-between flex font-black text-slate-300 border-emerald-900">
        <h1 className="pl-56">PORTFOLIO</h1>

        <nav className="text-sm space-x-3 justify-end">
          <Link href="/about">
            <a className="hover:text-emerald-200 hover:underline">ABOUT</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-emerald-200 hover:underline">CONTACT</a>
          </Link>
          <Link href="/service">
            <a className="hover:text-emerald-200 hover:underline">SERVICE</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
