import React from 'react'

const About = () => {
  return (
    <div name="about" 
    className="w-full h-screen bg-gradient-to-b from-green-400 to-slate-800 text-zinc-200">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <p className="text-4xl font-bold">About</p>

            <p className="text-xl mt-20">I love going to restaurants and love cooking food</p>
            <br />
            <p className="text-xl mt-5">I am bilingual in Chinese and English</p>
            <br />
            <p className="text-xl mt-5">Hiking and exploring nature are my favorite outdoor activities</p>
            <br />
            <p className="text-xl mt-5">I passed my level 8 Piano exam after learning piano for 3 years</p>
        </div>

        
    </div>
  )
}

export default About