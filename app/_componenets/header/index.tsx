import React from 'react'
import Container from '../shared/Container'
import NavbarLogo from './navbar/navbar-logo'
import Navbar from './navbar'

interface Props { }

function Header(props: Props) {
    const { } = props

    return (
        <header>
            <Container>
                <Navbar />
            </Container>
        </header>
    )
}

export default Header
