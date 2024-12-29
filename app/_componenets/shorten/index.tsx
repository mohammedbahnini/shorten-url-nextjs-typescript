'use client'
import React, { useRef, useState } from 'react'
import Container from '../shared/Container';
import shortenLink from '@/app/api/api';
import cx from 'classnames';
import { Oval } from 'react-loader-spinner';
import ShortenResult from './shorten-result';
import ShortenProcess from './shorten-process';
import { ShortenLinkType } from '@/app/_types';
import { shortenLinksInitial } from '@/app/content/shorten-content';

interface Props { }

function Shorten(props: Props) {

    const [shortenLinks, setShortenLinks] = useState<ShortenLinkType[]>(shortenLinksInitial);




    return (
        <section className='relative -top-20'>

            <div className='relative'>

                <Container>
                    <ShortenProcess setShortenLinks={setShortenLinks} />
                </Container>

            </div>

            <Container>
                <ShortenResult shortenLinks={shortenLinks} />
            </Container>
        </section>
    )
}

export default Shorten
