'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';

type NavLink = {
    label: string;
    href: string;
};
type Props = {
    navLinks:NavLink[];
};

const Navigation = ({ navLinks }:Props) => {
    const pathname = usePathname();

    return (<>{navLinks.map(link=>{
        const isActive = pathname === link.href;

        return (
            <Link 
            href={link.href}
            key = {link.label}
            className={isActive ? 'menu-item menu-item_active' : 'menu-item'}
            >
                <div className="menu-item__logo">
                        <img src={link.img} alt="" />
                    </div>
                    <div className="menu-item__title">
                    {link.label}
                    </div>
            </Link>
        )

    })}</>);
};

export { Navigation };