import React, { Fragment, useEffect, useState, useContext } from 'react';
import styled from 'styled-components/macro';
import { GameContext } from '../contexts/Game.context';

const Timer = (props) => {

    const { cardsArray, gameStart } = useContext(GameContext);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        let timer;
        if(gameStart){
            timer = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
            return () => clearInterval(timer);
        }
        else {
            clearInterval(timer);
        }
    }, [gameStart]);

    useEffect(() => {
        if(seconds === 60){
            setSeconds(0);
            setMinutes(minutes => minutes + 1);
        }
    }, [seconds])

    return (
        <Fragment>
            <TimeSection>{minutes}:{(`0${seconds}`).slice(-2)}</TimeSection>
        </Fragment>
    );
}

const TimeSection = styled.span`

`;

export default Timer;