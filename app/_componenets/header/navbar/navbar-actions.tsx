import Link from 'next/link'
import React from 'react'

interface Props { }

function NavbarActions(props: Props) {
    const { } = props

    return (
        <ul className=' items-center gap-9 hidden md:flex'>
            <li>
                <Link href='/' className='text-grayish-violet font-bold hover:text-very-dark-violet'>Login</Link>
            </li>
            <li>
                <Link href='/' className='bg-cyan px-6 rounded-full text-white font-bold py-2 hover:bg-cyan/50'>Sign up</Link>
            </li>
        </ul>
    )
}

export default NavbarActions
