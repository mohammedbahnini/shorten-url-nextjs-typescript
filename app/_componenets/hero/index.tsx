import React from 'react'
import Container from '../shared/Container'
import HeroeDescription from './hero-description'
import HeroImage from './hero-image'

interface Props { }

function Hero(props: Props) {
    const { } = props

    return (
        <section className='overflow-x-hidden'>
            <Container>
                <div className="flex relative pt-6  md:pt-36 pb-56  flex-col-reverse md:flex-row gap-8 md:gap-0   ">
                    <HeroeDescription />
                    <HeroImage />
                </div>
            </Container>
        </section>
    )
}

export default Hero
