import React from 'react'

function Header() {
  return (
    <header className="bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-center gap-8 py-4 text-white font-medium">
          
          <li className="cursor-pointer hover:text-yellow-400 transition duration-300">
            Home
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition duration-300">
            About
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition duration-300">
            Gallery
          </li>

          <li className="cursor-pointer hover:text-yellow-400 transition duration-300">
            Contact
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header