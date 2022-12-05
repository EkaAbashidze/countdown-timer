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
                <Shadow>
                    <div> <Times>{timerDays}</Times></div>
                </Shadow>
                <Text>DAYS</Text>
                </section>

                <section>
                <Shadow>
                    <Times>{timerHours}</Times>
                </Shadow>
                <Text>HOURS</Text>
                </section>

                <section>
                <Shadow>
                    <Times>{timerMinutes}</Times>
                </Shadow>
                <Text>MINUTES</Text>
                </section>

                <section>
                <Shadow>
                    <Times>{timerSeconds}</Times>
                </Shadow>
                <Text>SECONDS</Text>
                </section>
            </Countdown>
            </div>
        </Fragment>
    );
}

export default Clock;

const Shadow = styled.div`
    width: 70px;
    height: 71px;
    border-radius: 8px;
    background-color: #191a23;
    @media screen and (min-width: 1439.5px) {
        width: 148px;
        height: 150px;
        margin-bottom: 16px;
    }
`;

const Heading = styled.h1`
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 6.13636px;
    margin: auto;
    margin-top: 142px;
    color: white;
    max-width: 327px;
    @media screen and (min-width: 1439.5px) {
        font-size: 22px;
        line-height: 29px;
        letter-spacing: 7.5px;
    }
`;

const Countdown = styled.div`
    display: flex;
    margin-top: 54px;
    justify-content: center;
    text-align: center;
    column-gap: 16px;
        @media screen and (min-width: 1439.5px) {
        column-gap: 32px}
`;

const Times = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    line-height: 71px;
    letter-spacing: -1.08px;
    color: #fb5e84;
    width: 70px;
    height: 66.27px;
    background: linear-gradient(hsl(235, 16%, 15%) 50%, hsl(237, 21%, 20%) 50%);
    border-radius: 4px;
    @media screen and (min-width: 1439.5px) {
        font-size: 80px;
        letter-spacing: -2.4px;
        width: 148px;
        height: 140px;
    }
`;


const Text = styled.small`
    font-size: 7px;
    line-height: 9px;
    letter-spacing: 2.95937px;
    color: #8385a9;
    @media screen and (min-width: 1439.5px) {
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 5.91875px;
    }
    `;