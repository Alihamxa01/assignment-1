import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div className="rounded-3xl bg-gradient-to-tl to-teal-600 mt-3 from-teal-800 text-3xl p-4 border-b-8 justify-between flex font-black text-slate-300 border-emerald-900">
        <h1 className="justify-center">PORTFOLIO</h1>

        <nav className="text-lg space-x-3 justify-end">
          <Link href="/" className="hover:text-emerald-200 hover:underline">BACK</Link>
        </nav>
      </div>

      <h2 className="mt-16 text-5xl text-center font-black mb-4 text-emerald-950 underline">SERVICES</h2>
      <p className="text-xl justify-normal m-7 mt-12 font-semibold">
        I provide a range of digital services to help you stand out online.<mark className="bg-green-400"> From logo design, graphic design, video editing & website development to personalized portfolios and custom web projects.</mark> My goal is to bring your ideas to life. I work closely with each client to understand exactly what they need, focusing on both style and ease of use. With every project, I make sure the process is clear and smooth from start to finish. Whether you need a unique logo, a personal website, or a custom project, I’m here to create something special that fits your vision.
      </p>

      <h2 className="font-black text-5xl underline text-center text-emerald-950">MY PROJECTS</h2>
      <p className="text-xl text-center flex justify-center m-7 font-semibold mt-20">
        Here are some of my recent projects that showcase my skills and creativity. Each project is designed with care, attention to detail, and a commitment to quality.<br/>CLICK ON PROJECTS
      </p>

      <div className="flex justify-center">
        <Link href="../service/project" className="hover:text-green-500 font-black text-2xl hover:underline text-emerald-900">
          PROJECTS
        </Link>
      </div>
    </div>
  );
}
