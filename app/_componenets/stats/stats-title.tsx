import { statsContent } from '@/app/content/stats-content'
import React from 'react'

interface Props { }

function StatsTitle(props: Props) {
    const { } = props
    const { title, subtitle } = statsContent;

    return (
        <div className='text-center max-w-[540px] mx-auto '>
            <h1 className='font-bold text-3xl md:text-[40px] leading-[48px] tracking-[-1px] text-dark-violet mb-4 md:mb-5  '>{title}</h1>
            <h2 className='font-medium text-base leading-7 md:text-xl md:leading-8 text-neutral-violet  '>{subtitle}</h2>
        </div>
    )
}

export default StatsTitle
