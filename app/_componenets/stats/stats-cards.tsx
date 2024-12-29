import React from 'react'
import StatsCardsGroup from './stats-cards-group'
import StatsCyanLine from './stats-line'

interface Props { }

function StatsCards(props: Props) {
    const { } = props

    return (
        <div className='mt-24 md:mt-[100px] relative '>
            <StatsCardsGroup />
            <StatsCyanLine />
        </div>
    )
}

export default StatsCards
