import React from 'react'

export default function page() {
  return (
    <div className="">
<div className="rounded-3xl bg-gradient-to-tl to-teal-600  from-teal-800 text-3xl p-4 border-b-8 justify-between flex font-black text-slate-300 border-emerald-900">
      <h1 className='justify-center'>PORTFOLIO </h1>

      <nav className="text-lg space-x-3 justify-end ">
      <a href="./"  className='hover:text-emerald-200 hover:underline'>BACK</a>
      </nav>

      </div>
{/* projects */}
<div>
<section id="project" className="px-6 py-10 bg-transparent rounded-lg shadow-2xl text-center border-b-2 border-t-2">
  <h2 className="text-6xl font-black mb-4">
    <span className="text-9xl text-green-400">MY</span>PROJECTS <span className="text-white"></span><br/>
    <h2 className="text-2xl">WEB-DEVELOPMENT</h2>
  </h2>
  <div className="border-t-4 border-green-400 my-10"></div>

  <div className="flex flex-wrap justify-between items-start">

    {/* RESUME BUILDER (Left) */}
    <div className="w-full lg:w-1/2 bg-transparent text-center pt-4 px-6">
      <h1 className="text-4xl font-mono font-bold items-center text-green-500">
        <span className="text-8xl">D</span>YNAMIC RESUME BUILDER
      </h1>
      {/* image1 */}
      <div className="max-w-xl hover:scale-105 hover:shadow-green-400 shadow-lg hover:bg-teal-800 duration-200 pt-3 mt-5 rounded-lg">
                {/* para 1*/}
        <p className="text-xl font-medium mt-4 text-white pb-6 px-6">
          This is a dynamic resume builder website where you can fill in your information, and a resume will be generated for you. You can also edit the resume later as needed.<br /><br />
          Here is the link: <a href="https://sparkling-panda-2ec022.netlify.app/" target="_blank" className="text-blue-200 hover:text-green-400">you can try this!</a>
        </p>
      </div>
    </div>

    {/* MUSIC PLAYER (Right) */}
    <div className="w-full lg:w-1/2 bg-transparent text-center pt-4 px-6">
      <h1 className="text-4xl font-mono font-bold text-center text-green-500">
        <span className="text-8xl">MR</span>FOODIE
      </h1>
      {/* img2 */}
      <div className="max-w-xl hover:scale-105 hover:shadow-green-400 shadow-lg hover:bg-teal-800 duration-200 pt-3 mt-5 rounded-lg">
        {/* <a>
          <Image src="/img4.jpg" alt="photo" height="300" width="300" className="mx-auto mt-5 shadow-lg bg-transparent hover:bg-teal-800 hover:shadow-lg hover:shadow-green-400 duration-200 rounded-lg" />
        </a> */}
        {/* para 2 */}
        <p className="text-xl font-medium pb-3 mt-4 text-white px-6">
        I created a website named "Mr. Foodie" to showcase my skills, featuring a menu bar, header, footer, and a hero section with food images. It also includes a fast food menu.


</p>
        <br /> Here is the link: <a href="https://foodie-com-website2.vercel.app/" target="_blank" className="text-blue-200 hover:text-green-400 hover:text-l">you can try this!</a>
      </div>
    </div>

  </div>
</section>


</div>
      
    </div>
  )
}
