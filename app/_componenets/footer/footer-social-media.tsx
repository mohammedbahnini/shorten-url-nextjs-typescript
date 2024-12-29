import Link from 'next/link'
import React from 'react'

interface Props { }

function FooterSocialMedia(props: Props) {
    const { } = props

    return (
        <div>
            <ul className='flex gap-6'>
                <li>
                    <Link href='/'><img src='/images/icons/icon-facebook.svg' alt='Facebook' /> </Link>
                </li>
                <li>
                    <Link href='/'><img src='/images/icons/icon-twitter.svg' alt='Twitter' /> </Link>
                </li>
                <li>
                    <Link href='/'><img src='/images/icons/icon-pinterest.svg' alt='Pintrest' /> </Link>
                </li>
                <li>
                    <Link href='/'><img src='/images/icons/icon-instagram.svg' alt='Instagram' /> </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterSocialMedia
