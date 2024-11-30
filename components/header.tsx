'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          WO
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white space-y-6 md:space-y-0 md:static md:flex-row md:space-x-4 transform md:transform-none transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <li>
            <Link href="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link href="/projects" onClick={toggleMenu}>Projects</Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
