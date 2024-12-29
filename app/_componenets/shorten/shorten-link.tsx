'use client'
import React, { useState } from 'react'
import cx from 'classnames'
import CopyToClipboard from 'react-copy-to-clipboard'

type LinkType = {
    shortenUrl: string;
    url: string;
}

type PropsType = {
    link: LinkType
}



function ShortenLink(props: PropsType) {
    const { link } = props;
    const [isCopied, setIsCopied] = useState<boolean>(false)

    return (
        <div className='flex flex-col md:flex-row md:items-center  bg-white rounded-xl  '>

            <p className='flex-1 text-xl leading-9 text-dark-violet relative pt-2 pb-2 px-4 border-b-[1px] border-slate-200 md:border-none '>{link.url}</p>
            <p className='text-cyan font-medium text-xl leading-9 md:ml-6 px-4 my-2'>{link.shortenUrl}</p>
            <CopyToClipboard text={link.shortenUrl} onCopy={(() => setIsCopied(true))}>
                <button className={cx(' text-white py-2 rounded-md font-bold text-base md:ml-6 md:w-[100px]  mx-4 mb-4 md:mb-0 ',
                    {
                        'bg-very-dark-violet': isCopied,
                        'bg-cyan': !isCopied
                    })}>
                    {isCopied ? 'copied!' : 'copy'}
                </button>
            </CopyToClipboard>
        </div>
    )
}

export default ShortenLink
