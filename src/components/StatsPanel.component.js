import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { GameContext } from '../contexts/Game.context';
import Timer from './Timer.component';


const StatsPanelComponent = (props) => {

    const { movesCounter, player1Score } = useContext(GameContext);
    return (
        <StatsPanel>
            <StatsColumn>
                <StatsCell>
                    <StatsLabel>Score</StatsLabel>
                    <StatsValue>{player1Score}</StatsValue>
                </StatsCell>
            </StatsColumn>
            <StatsColumn>
                <StatsCell>
                    <StatsLabel>Time</StatsLabel>
                    <StatsValue><Timer/></StatsValue>
                </StatsCell>
                <StatsCell>
                    <StatsLabel>Moves</StatsLabel>
                    <StatsValue>{movesCounter}</StatsValue>
                </StatsCell>
            </StatsColumn>
        </StatsPanel>
    );
}

const StatsPanel = styled.div`
    flex: 1 1 auto;
    border: 1px solid #fff;
    margin-top: 10px;
    display: flex;
`;

const StatsColumn = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: center;
`;

const StatsCell = styled.div`
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding 10px;
    width: 100%;
`;

const StatsLabel = styled.h6`
    flex: 0 0 auto;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 0;
`;

const StatsValue = styled.h2`
    flex: 0 0 auto;
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    margin: 0;

`;

export default StatsPanelComponent;