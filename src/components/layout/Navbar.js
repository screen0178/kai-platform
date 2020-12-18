import React from "react"

import UserDropdown from "../widget/UserDropdown.js"

const Navbar = () => {
    return (
        <>
          {/* Navbar */}
          <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
            <div className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
              {/* Brand */}
              <p
                className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              >
                Dashboard
              </p>
              {/* User */}
              <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                <UserDropdown />
              </ul>
            </div>
          </nav>
          <div className="relative bg-yellow-600 md:pt-32 pb-32 pt-12">
          </div>
          {/* End Navbar */}
        </>
      )
}

export default Navbar