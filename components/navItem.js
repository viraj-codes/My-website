import Link from 'next/link';
import React from 'react'
import NavbarStyles from '@/styles/navbar';
const navItem = ({ text, href, active }) => {
    return (<div>
        <Link href={href} legacyBehavior>
            <a
                className={`nav__item ${active ? "active" : ""
                    }`}
            >
                {text}
            </a>
        </Link>
        <style jsx>
            {NavbarStyles}
        </style>
    </div>
    );
};

export default navItem;


