
import React from 'react'
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div id="hero">
        <div class="bg-gray-100 mt-5 px-20 py-8">
        
        <div class="grid grid-cols-2 gap-4">
        <div>
        <h1 className='text-4xl font-bold'>
   <Typewriter
    options={{
      strings: ["Hey there, I'm Ronak Poddar!!!"],
      autoStart: true,
      loop: true,
      delay: 75,
    }}
  />
</h1>
                <h2 className='text-2xl mt-3'>A Full Stack Devloper and Designer based in India</h2>
                <p className='mt-3'>Full-stack developer with a passion for turning code into seamless user experiences!</p>
                <button className='p-2 bg-blue-400 text-white mt-3 rounded-xl'>
                    Contact Me
                </button>
            </div>
           
            <div className='flex justify-end pr-10'>
                <img src="/my_profile_photo.jpeg" alt="" className='rounded-full h-80 w-80' />
            </div>
            </div>
        </div>    
    </div>
  )
}

export default Hero
