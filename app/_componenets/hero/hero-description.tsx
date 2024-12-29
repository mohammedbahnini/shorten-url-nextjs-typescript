import { heroContent } from '@/app/content/hero-content'
import Link from 'next/link'
import React from 'react'

interface Props { }

function HeroeDescription(props: Props) {
    const { } = props

    const { title, subtitle, ctaText } = heroContent;
    return (
        <div className='max-w-[563px] text-center md:text-left '>
            <h1 className='text-very-dark-blue font-bold text-[42px] md:text-[80px] mb-4 md:mb-1 leading-[48px] md:leading-[90px] tracking-[-2px] '>{title}</h1>
            <h2 className='text-grayish-violet text-lg leading-8 md:leading-9  md:text-[22px] font-medium mb-8  md:mb-10  mr-6'>{subtitle}</h2>
            <Link href='/' className='bg-cyan hover:bg-cyan-hover text-white px-10 py-4 rounded-full font-bold text-xl'>{ctaText}</Link>
        </div>
    )
}

export default HeroeDescription
