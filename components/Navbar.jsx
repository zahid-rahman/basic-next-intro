import React from 'react'
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="logo">
                <Link href="/">
                    <a>LOGO</a>
                </Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/users/"><a>User Listing</a></Link>
        </nav>
    )
}

export default Navbar
