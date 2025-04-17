"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 md:px-8 py-4">
                
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className={`md:flex md:items-center md:justify-center w-full md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`} id="navbar-sticky">
                    <ul className="flex flex-col md:flex-row md:space-x-8 px-4 md:px-0 py-4 md:py-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li><Link href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Home</Link></li>
                        <li><Link href="/#about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">About</Link></li>
                        <li><Link href="/#skills" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Skills</Link></li>
                        <li><Link href="/#portfolio" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Portfolio</Link></li>
                        <li><Link href="/#contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}