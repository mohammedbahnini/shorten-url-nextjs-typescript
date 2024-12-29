import React from 'react'
import StatsCard from './stats-card'
import { statsContent } from '@/app/content/stats-content'

interface Props { }

function StatsCardsGroup(props: Props) {
    const { } = props
    const { cards } = statsContent;
    return (
        <div className=' flex flex-col md:flex-row gap-24 md:gap-8 items-start relative z-[1]'>
            {
                cards.map(card => <StatsCard card={card} key={card.title} />)
            }
        </div>
    )
}

export default StatsCardsGroup
