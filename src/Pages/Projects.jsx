import React from 'react'

const Projects = () => {

  

  return (
    <div name="projects"
    className="bg-gradient-to-l from-slate-600 to-cyan-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <p className='text-4xl font-bold'>Projects</p>
            
            <ul className='mt-5'>
              <li className='font-mono text-2xl font-medium'>Weather App</li>
              <li className='font-mono text-sm font-medium indent-6'>Tech Stack: HTML, CSS, JavaScript</li>
              <li className='font-mono text-sm font-medium indent-6'>Available at: <a href = "https://its20pm.github.io/Weather_app/html/index.html" 
                  className='underline-offset-1'>
                Here</a></li>
            </ul>

            <ul className='mt-5'>
              <li className='font-mono text-2xl font-medium'>To Do List App</li>
              <li className='font-mono text-sm font-medium indent-6'>Tech Stack: React.js, Node.js, Express.js, MongoDB</li>
            </ul>

            <ul className='mt-5'>
              <li className='font-mono text-2xl font-medium'>Blog Post App</li>
              <li className='font-mono text-sm font-medium indent-6'>Tech Stack: Django, HTML, CSS, MySQL</li>
            </ul>

            <ul className='mt-5'>
              <li className='font-mono text-2xl font-medium'>Email Spam Detector</li>
              <li className='font-mono text-sm font-medium indent-6'>Tech Stack: Python, Pandas, Numpy</li>
            </ul>

            <ul className='mt-5'>
              <li className='font-mono text-2xl font-medium'>Emotion Detection Tool</li>
              <li className='font-mono text-sm font-medium indent-6'>Tech Stack: Python, NumPy, Keras, Tensorflow, Matplotlib</li>
            </ul>

            

        </div>
        
    </div>
  )
}

export default Projects