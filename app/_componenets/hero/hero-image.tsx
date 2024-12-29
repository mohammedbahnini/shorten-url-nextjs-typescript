import Image from 'next/image'
import React from 'react'

interface Props { }

function HeroImage(props: Props) {

    return (
        <div className='md:-right-[288px] relative md:absolute right-0 top-0 md:top-20    ' >
            <div className='w-[153%]  md:w-[733px]  ' >
                <Image src={'/images/illustrations/illustration-working.svg'} alt='Working Person' width={400} height={150} className='w-full object-cover' />
            </div>
        </div>
    )
}

export default HeroImage
