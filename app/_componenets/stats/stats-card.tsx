import { StatsCardType } from '@/app/_types'
import Image from 'next/image'
import React from 'react'

interface Props {
    card: StatsCardType
}

function StatsCard(props: Props) {
    const { card } = props

    return (
        <div className='pt-20 px-8 pb-10 bg-white rounded-md relative md:[&:nth-child(2)]:mt-11 md:[&:nth-child(3)]:mt-[88px]'>
            <div className='w-[88px] aspect-square rounded-full bg-very-dark-violet flex items-center justify-center absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 '>
                <Image src={card.icon} alt={card.alt} width={50} height={50} />
            </div>
            <div className='text-center md:text-left'>
                <h1 className='font-bold text-xl mb-3  '>{card.title}</h1>
                <h2 className='font-medium text-grayish-violet text-base leading-7'>{card.description}</h2>
            </div>
        </div>
    )
}

export default StatsCard
