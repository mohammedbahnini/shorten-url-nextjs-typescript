import Link from 'next/link'
import React from 'react'

interface Props { }

function MobileMenuActions(props: Props) {
    const { } = props

    return (
        <div>
            <ul className='flex flex-col gap-6 items-center mt-8 '>
                <li>
                    <Link href='/' className='text-white text-lg font-bold hover:text-neutral-very-dark-violet'>Login</Link>
                </li>
                <li className='w-full  '>
                    <Link href='/' className='bg-cyan px-6 py-3 rounded-full text-white  text-lg font-bold hover:bg-cyan-hover w-full block text-center  '>Sign up</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenuActions
