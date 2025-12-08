"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header>
            <div className="wrapper wrapper--header">
                
                {/* Header group */}
                <div className={`header_group ${menuOpen ? "open" : ""}`}>
                    <h1>
                        <Link href="/">
                            <img src="/assets/img/logo.svg" alt="サイトのロゴ" />
                        </Link>
                    </h1>

                    {/* Hamburger */}
                    <div
                        className={`hamburger ${menuOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                    >
                        <div className="hamburger_bar"></div>
                        <div className="hamburger_bar"></div>
                        <div className="hamburger_bar"></div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className={`nav ${menuOpen ? "open" : ""}`}>
                    <ul className="nav_list">
                        <li className="nav_item">
                            <Link className="manrope" href="/#services" onClick={() => setMenuOpen(false)}>
                                Services
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link className="manrope" href="/#skills" onClick={() => setMenuOpen(false)}>
                                Skills
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link className="manrope" href="/#works" onClick={() => setMenuOpen(false)}>
                                Works
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link className="manrope" href="/#about" onClick={() => setMenuOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link className="manrope" href="/#contact" onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
