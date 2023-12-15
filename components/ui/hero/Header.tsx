"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

const Header = () => {

    const [showNavbar, setShowNavbar] = useState(false);
    const [mobileNavClass, setMobileNavClass] = useState("nav-elements absolute hidden")

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    useEffect(() => {
        setMobileNavClass(showNavbar ? "nav-elements absolute block" : "nav-elements absolute hidden")
    }, [showNavbar])


    return (
        <header className="header w-full">
            <Image
                alt="Storybook Logo"
                src={'/logo.svg'}
                height={70}
                width={400}
            />
            <nav className="relative">
                <ul className="hidden lg:flex items-center justify-end gap-12 text-lg">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Web Development</Link>
                    </li>
                    <li>
                        <Link href="/">Marketing</Link>
                    </li>
                    <li>
                        <Link className="btn" href="/">Contact</Link>
                    </li>
                </ul>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    X
                </div>
                <div className={mobileNavClass}>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Web Development</Link>
                        </li>
                        <li>
                            <Link href="/">Marketing</Link>
                        </li>
                        <li>
                            <Link className="btn" href="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header