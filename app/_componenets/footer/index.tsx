import React from 'react'
import Container from '../shared/Container'
import FooterLogo from './footer-logo'
import FooterMenu from './footer-menu'
import FooterSocialMedia from './footer-social-media'

interface Props { }

function Footer(props: Props) {
    const { } = props

    return (
        <footer className='bg-very-dark-blue py-14 md:py-20 '>
            <Container>
                <div className='flex flex-col items-center md:items-start md:flex-row gap-12 md:gap-0'>
                    <FooterLogo />
                    <FooterMenu />
                    <FooterSocialMedia />
                </div>
            </Container>
        </footer>
    )
}

export default Footer
