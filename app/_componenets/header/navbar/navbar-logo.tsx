import Image from 'next/image'
import React from 'react';


interface Props { }

function NavbarLogo(props: Props) {
    const { } = props

    return (
        <a>
            <Image src={'/images/logo/logo.svg'} alt='Shortly' width={120} height={33} />
        </a>
    )
}

export default NavbarLogo
