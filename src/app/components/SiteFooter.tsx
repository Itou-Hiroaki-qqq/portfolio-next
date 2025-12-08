"use client";

import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="wrapper wrapper--footer">
            <div className="footer_group">
                <h2 className="footer_logo">
                    <Link href="/">
                        <img src="/assets/img/logo.svg" alt="サイトのロゴ" />
                    </Link>
                </h2>

                <nav className="footer_nav">
                    <ul className="footer_nav-list">
                        <li className="footer_nav-item">
                            <Link className="manrope" href="/#services">
                                Services
                            </Link>
                        </li>
                        <li className="footer_nav-item">
                            <Link className="manrope" href="/#skills">
                                Skills
                            </Link>
                        </li>
                        <li className="footer_nav-item">
                            <Link className="manrope" href="/#works">
                                Works
                            </Link>
                        </li>
                        <li className="footer_nav-item">
                            <Link className="manrope" href="/#about">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <p className="copy">
                <small className="manrope">
                    <span>All Rights Reserved 2025 ©︎ Hiroaki Ito</span>
                    <span className="sp-none">　｜　</span>
                    <span>
                        Icon by{" "}
                        <a target="_blank" href="https://icons8.com">
                            Icons8
                        </a>
                    </span>
                </small>
            </p>
        </footer>
    );
}
