import React from 'react'

const Footer = () => {
    return (
        <footer className="block py-4">
            <div className="container mx-auto px-4">
                <hr className="mb-4 border-b-1 border-gray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4">
                    <div className="text-sm text-gray-600 font-semibold py-1 ">
                    Copyright © {new Date().getFullYear()}{" "}
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer