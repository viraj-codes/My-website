import Link from "next/link";

import React, { useState } from "react";
import NavItem from "./navItem";
import NavbarStyles from '@/styles/navbar';
const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <div className="navbox">
            <header>
                <nav className={`nav`}>
                    <Link href={"/"} legacyBehavior>
                        <a>
                            <h1 className="logo">Viraj Joshi</h1>
                        </a>
                    </Link>
                    <div
                        onClick={() => setNavActive(!navActive)}
                        className={`nav__menu-bar`}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                        {MENU_LIST.map((menu, idx) => (
                            <div
                                onClick={() => {
                                    setActiveIdx(idx);
                                    setNavActive(false);
                                }}
                                key={menu.text}
                            >
                                <NavItem active={activeIdx === idx} {...menu} />
                            </div>
                        ))}
                    </div>
                </nav>

            </header>
            <style jsx>
                {NavbarStyles}
            </style>
        </div>
    );
};

export default Navbar;