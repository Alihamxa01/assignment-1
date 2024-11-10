import React from 'react';
import Link from 'next/link'; // Import Link for internal navigation
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-emerald-300 p-5">
      <div className="rounded-3xl bg-gradient-to-tl to-teal-600 from-teal-800 text-3xl p-4 border-b-8 justify-between flex font-black text-slate-300 border-emerald-900 w-full">
        <h1 className="justify-center">PORTFOLIO</h1>

        <nav className="text-lg space-x-3 justify-end">
          <Link href="/" className="hover:text-emerald-200 hover:underline">
            BACK
          </Link>
        </nav>
      </div>

      <h2 className="mt-10 text-5xl justify-center text-center mb-20 font-black text-emerald-950 underline">
        CONTACT US
      </h2>

      <p className="text-lg text-gray-800 font-medium mb-6 text-center px-4">
        If you have any questions or would like to connect, feel free to reach out via email or through my LinkedIn profile!
      </p>

      <p className="text-lg text-gray-700 mb-6 text-center px-4">
        I am always open to new opportunities and collaborations. If you’re interested in working together on a project or have an idea you’d like to discuss, don’t hesitate to reach out. Let’s create something amazing together!
      </p>

      <div className="flex justify-center space-x-8 mt-5">
        <a
          href="mailto:hamza.nadeem.0106@gmail.com"
          className="flex items-center text-emerald-900 hover:text-green-800 duration-300 hover:font-black text-xl"
        >
          <FaEnvelope className="mr-2 text-3xl" />
          <span className="text-xl">hamza.nadeem.0106@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ali-hamza-nadeem-479b42292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center duration-300 hover:font-black text-emerald-900 hover:text-green-700 text-xl"
        >
          <FaLinkedin className="mr-2 text-3xl" />
          <span className="text-xl">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
