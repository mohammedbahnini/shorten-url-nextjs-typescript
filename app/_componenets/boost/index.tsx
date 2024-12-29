import React from 'react'
import Container from '../shared/Container'
import { BoostContent } from '@/app/content/boos-content'

interface Props { }

function Boost(props: Props) {
    const { } = props
    const { title, ctaText } = BoostContent;
    return (
        <section className='bg-[url(/images/bg/bg-boost-mobile.svg)] md:bg-[url(/images/bg/bg-boost-desktop.svg)] bg-cover bg-very-dark-violet md:mt-32 mt-20'>
            <Container>
                <div className="flex flex-col items-center md:gap-8 gap-4 md:py-14 py-24   ">
                    <h1 className='text-white font-bold text-3xl md:text-[40px] leading-[48px] -tracking-[1px] text-center '>{title}</h1>
                    <button className='bg-cyan text-white font-bold text-xl py-3 px-10 rounded-full'>{ctaText}</button>
                </div>
            </Container>
        </section>
    )
}

export default Boost
