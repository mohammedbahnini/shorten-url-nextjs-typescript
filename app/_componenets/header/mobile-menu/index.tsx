'use client'
import React, { useState } from 'react'
import Menu from './menu'
import { MdMenu } from 'react-icons/md'

interface Props {

}

function MobileMenu(props: Props) {
    const { } = props;
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <div className=''>

            <span className='md:hidden bg-transparent cursor-pointer outline-none border-none  flex items-center '
                onClick={() => setIsOpened(prev => !prev)}  >
                <MdMenu className='text-2xl' />
            </span>
            <Menu isOpened={isOpened} />

        </div>
    )
}

export default MobileMenu
