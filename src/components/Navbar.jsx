import React from 'react'
const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-200 py-5 shadow-lg rounded-lg">
        <div className="flex flex-col items-center sm:flex-row sm:justify-start sm:ml-10 gap-2">
          <img
            className="h-10 w-10"
            src="/icon.png"
            alt="Planit Logo"
          />
          <p className="text-green-600 cursor-pointer text-center text-3xl hover:font-bold font-sans tracking-wider">
            Planit
          </p>
        </div>
      </nav>
    </>
  )
}

export default Navbar