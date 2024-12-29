import React from 'react'
import MobileMenuActions from './menu-actions'
import Link from 'next/link'
import cx from 'classnames';
import { links } from '@/app/content/mobile-menu-content';

interface Props {
    isOpened: boolean
}


function Menu(props: Props) {
    const { isOpened } = props


    return (
        <div className={cx('absolute right-0 translate-y-6 bg-dark-violet rounded-xl w-full px-6 py-10  z-50 origin-top-right transition duration-100 ease-in  ', {
            'scale-100 opacity-100  ': isOpened,
            'scale-50 opacity-0    ': !isOpened
        })}>
            <ul className='flex flex-col gap-8 border-b-slate-100/50 border-b-2 pb-8  '>
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link href={link.href} className='text-white font-bold text-center block text-lg capitalize'>{link.text}</Link>
                        </li>
                    )
                })}
            </ul>

            <MobileMenuActions />
        </div>
    )
}

export default Menu
