import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-scroll';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const Navmenu = [
        { href: "About", name: "About" },
        { href: "Portfolio", name: "Portfolio" },
        { href: "About", name: "Contact" },
    ]

    const toggleMenu = () => {
        setOpen(!open);
    }

    return (
        <nav className='flex justify-end px-10 relative h-10 items-end z-10'>
            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-10 text-amber-500 text-xl'>
                {Navmenu.map((item, key) => (
                    <Link key={key} to={item.href} smooth={true} duration={500}>
                        {item.name}
                    </Link>
                ))}
            </ul>

            {/* Hamburger Icon */}
            <div className='block md:hidden text-amber-500' onClick={toggleMenu}>
                {open ? <RxCross1 size={24} /> : <FaBars size={24} />}
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 transition-transform duration-300 ease-in-out 
                ${open ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Back Button */}
                <div className="flex justify-between items-center px-6 py-4">
                    <h2></h2>
                    <button onClick={toggleMenu} className="text-amber-500">
                        <RxCross1 size={28} />
                    </button>
                </div>

                {/* Nav Links */}
                <ul className='text-amber-600 flex flex-col items-center justify-center h-[80%] gap-8 text-xl'>
                    {Navmenu.map((item, key) => (
                        <Link
                            key={key}
                            to={item.href}
                            smooth={true}
                            duration={500}
                            onClick={toggleMenu}
                            className="hover:text-amber-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
