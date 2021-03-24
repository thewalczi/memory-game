import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { GameContext } from '../contexts/Game.context';
import Timer from './Timer.component';
import { color, breakpoint } from './../styles/global-variables.styles';
import { tile } from '../styles/mixins.styles';

const Bar = styled.div`
    ${tile};
    flex: 0 0 auto;
    margin-top: 15px;
    display: flex;
    background-color: ${color.darknavy};
`;

const StatsCell = styled.div`
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding 15px;
    width: 100%;
`;

const StatsLabel = styled.h6`
    flex: 0 0 auto;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin: 0;

    @media (max-width: ${breakpoint.md}){
        font-size: 12px;
    }
`;

const StatsValue = styled.h2`
    flex: 0 0 auto;
    font-size: 32px;
    font-weight: normal;
    text-align: center;
    margin: 0;
  
    @media (max-width: ${breakpoint.md}){
        font-size: 24px;
    }
`;

const StatsBar = () => {

    const { movesCounter, player1Score } = useContext(GameContext);
    
    return (
        <Bar>
            <StatsCell>
                <StatsLabel>Score</StatsLabel>
                <StatsValue>
                    {player1Score}
                </StatsValue>
            </StatsCell>
            <StatsCell>
                <StatsLabel>Time</StatsLabel>
                <StatsValue>
                    <Timer/>
                </StatsValue>
            </StatsCell>
            <StatsCell>
                <StatsLabel>Moves</StatsLabel>
                <StatsValue>
                    {movesCounter}
                </StatsValue>
            </StatsCell>
        </Bar>
    );
}

export default StatsBar;