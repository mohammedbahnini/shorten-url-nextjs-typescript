
import { NavbarLinkType } from '@/app/_types';
import { links } from '@/app/content/navbar-content';
import Link from 'next/link';
import React from 'react'

interface Props { }


function NavbarLinks(props: Props) {


    return (
        <ul className='flex-grow  items-center gap-7 ml-11 hidden md:flex'>
            {links.map((link, index) => {
                return (
                    <li key={index}>
                        <Link href={link.href} className='font-bold text-base text-grayish-violet hover:text-very-dark-violet capitalize'>{link.text}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavbarLinks
