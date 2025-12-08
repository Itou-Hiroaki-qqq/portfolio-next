"use client";

import Link from "next/link";

export default function SiteHeader() {
    return (
        <header>
            <div className="wrapper wrapper--header">
                <div className="header_group">
                    <h1>
                        <Link href="/">
                            <img src="/assets/img/logo.svg" alt="サイトのロゴ" />
                        </Link>
                    </h1>

                    {/* hamburger */}
                    <div className="hamburger">
                        <div className="hamburger_bar"></div>
                        <div className="hamburger_bar"></div>
                        <div className="hamburger_bar"></div>
                    </div>
                </div>

                <nav className="nav">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <Link className="manrope" href="/#services">
                                Services
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link className="manrope" href="/#skills">
                                Skills
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link className="manrope" href="/#works">
                                Works
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link className="manrope" href="/#about">
                                About
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link className="manrope" href="/#contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
