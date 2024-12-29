import React from 'react'
import NavbarLogo from './navbar-logo'
import Container from '../../shared/Container'
import NavbarLinks from './navbar-links'
import NavbarActions from './navbar-actions'
import MobileMenu from '../mobile-menu'

interface Props { }

function Navbar(props: Props) {
    const { } = props

    return (
        <nav>

            <div className="flex items-center mt-10 md:mt-12 justify-between  md:justify-normal relative  py-0 m:py-2  ">
                <NavbarLogo />
                <NavbarLinks />
                <NavbarActions />
                <MobileMenu />
            </div>
        </nav>
    )
}

export default Navbar
