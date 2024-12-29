import React from 'react'
import Container from '../shared/Container'
import StatsTitle from './stats-title'
import StatsCards from './stats-cards'

interface Props { }

function Stats(props: Props) {
    const { } = props

    return (
        <section>
            <Container>
                <div className='mt-0 md:mt-10'>
                    <StatsTitle />
                    <StatsCards />
                </div>
            </Container>
        </section>
    )
}

export default Stats
