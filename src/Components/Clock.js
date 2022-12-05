import React from 'react'
import { Fragment } from 'react';
import styled from 'styled-components';

function Clock(props) {
    
    const { timerDays, timerHours, timerMinutes, timerSeconds } = props;
    
    
    return (
        <Fragment>
        

        <div>

            <Heading>WE'RE LAUNCHING SOON</Heading>


        <Countdown>

            <section>
                <Times>{timerDays}</Times>
                <Text>DAYS</Text>
            </section>

            <section>
                <Times>{timerHours}</Times>
                <Text>HOURS</Text>
            </section>

            <section>
                <Times>{timerMinutes}</Times>
                <Text>MINUTES</Text>
            </section>

            <section>
                <Times>{timerSeconds}</Times>
                <Text>SECONDS</Text>
            </section>

            </Countdown>


        </div>




        </Fragment>
    )
}

export default Clock;

const Heading = styled.h1`
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 6.13636px;
    margin: auto;
    margin-top: 142px;
    color: white;
    max-width: 327px;
`;

const Countdown = styled.div`
    display: flex;
    margin-top: 54px;
    justify-content: center;
    text-align: center;
    column-gap: 16px;
`;

const Times = styled.p`
    font-size: 36px;
    line-height: 71px;
    letter-spacing: -1.08px;
    color: #fb5e84;
`;


const Text = styled.small`
    font-size: 7px;
    line-height: 9px;
    letter-spacing: 2.95937px;
    color: #8385a9;
`;