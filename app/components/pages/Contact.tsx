import React from 'react'

export default function Contact() {
  return (
    <div className='min-h-screen bg-blue-200 flex flex-col justify-around'>
      <div className='text-center mt-20'>
        <h1 className='text-4xl font-extrabold text-blue-800 mb-5'>CONTACT ME</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe alias fugiat, maiores culpa dicta repellendus? Unde nihil dolore nemo illo, beatae quam sequi harum odio expedita libero aliquid veritatis?</p>
      </div>
      <div className='flex max-md:flex-col justify-center items-center'>
        <div className='flex-1'>
          img
        </div>
        <div className='flex-1 p-5'>
          <div className='flex flex-col gap-5 lg:w-2/3'>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Your name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Your Email" />
            </label>
            <textarea className="textarea textarea-bordered" rows={8} placeholder="Your Message"></textarea>
            <div className='w-full flex justify-end'>
              <button className='btn btn-success text-white w-1/2'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
