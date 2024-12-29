import React from 'react'
import ShortenLink from './shorten-link';
import { ShortenLinkType } from '@/app/_types';


interface Props {
    shortenLinks: ShortenLinkType[]
}




function ShortenResult(props: Props) {
    const { shortenLinks } = props

    return (
        <div className='flex flex-col gap-6 md:gap-5 mt-6 '>
            {
                shortenLinks.map((link, index) => (<ShortenLink link={link} key={index} />))
            }

        </div>
    )
}

export default ShortenResult
