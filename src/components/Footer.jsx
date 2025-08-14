import React from 'react'

const Footer = () => {
  return (
    <div className="bg-blue-950 w-full py-10">
      <section className="font-bold text-white text-2xl px-5 mb-4 text-center md:text-left">
        <h1>&copy; 2025 Copyrights reserved</h1>
      </section>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-5 text-white font-bold gap-2">
        <div>
          Contact me at :
          <ul className="list-none my-2">
            <li>
              Gmail: <a className="underline" href="mailto:rakshaadhikari697@gmail.com">rakshaadhikari697@gmail.com</a>
            </li>
            <li>
              LinkedIn: <a className="underline" href="https://www.linkedin.com/in/raksha-adhikari-121214289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">RakshaAdhikari</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer