import React from 'react';
import styled from 'styled-components';
import BoardComponent from '../components/Board.component';
import StatsPanelComponent from '../components/StatsPanel.component';

const GameContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

function GamePage(props) {
    return (
        <GameContainer>
            <BoardComponent/>
            <StatsPanelComponent/>
        </GameContainer>
    );
}

export default GamePage;