import React from 'react'
import Link from 'next/link'

export default function about() {
  return (
    <div>


        <div className="rounded-3xl bg-gradient-to-tl to-teal-600  from-teal-800 text-3xl p-4 border-b-8 justify-between flex font-black text-slate-300 border-emerald-900">
      <h1 className='justify-center'>PORTFOLIO </h1>

      <nav className="text-lg space-x-3 justify-end ">
      <a href="/"  className='hover:text-emerald-200 hover:underline'>BACK</a>
      </nav>

  </div>
{/* about */}
  <section className="about-section py-10 bg-gradient-to-t to-teal-300 from-emerald-400 h-screen pl-10 pr-10">
      <h2 style={{textAlign:"center"}} className="text-5xl font-black mb-4 text-emerald-950 underline">About Me</h2>
      <p className="text-lg mb-4 font-bold mt-20 ">
        Hi! I’m Ali Hamza, a passionate web developer with a knack for creating
        engaging and user-friendly websites. With experience in HTML, CSS, and JavaScript,
        I love turning ideas into reality through code.
      </p>
      <p className="text-lg mb-4 font-bold">
        I have been working on various projects, from simple landing pages to complex web applications.
        I am constantly exploring new technologies and improving my skills to stay up-to-date with industry trends.
      </p>
      <p className="text-lg mb-4 font-bold">
        When I’m not coding, you can find me designing logos or enjoying music.
        I believe in continuous learning and am always excited to take on new challenges.
      </p>

      
    
    
    </section>
    
    </div>
  )
}
