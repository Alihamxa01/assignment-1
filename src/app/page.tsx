import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Page() {
  return (
    <div >
      <Header />
      <div id="home" className="flex pl-5 flex-col items-start justify-center min-h-screen font-black">
        <h1 className="text-left pl-7 text-7xl">HEY! I AM</h1> {/* Align text to the left */}
        <h1 className="mt-0 text-left text-6xl sm:text-9xl text-emerald-950">ALI HAMZA</h1> {/* Ensure text is left aligned */}
      <p className="font-serif text-2xl mt-5">Welcome to my portfolio website! <br/> Here, I will showcase my completed work, projects, and more.

</p>
      </div>
      <Footer/>
    </div>
  );
}
