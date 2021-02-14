import React from 'react';
import styled from 'styled-components';
import BoardCoomponent from '../components/Board.component';
import BoardComponent from '../components/Board.component';
import PlayerPanelComponent from '../components/PlayerPanel.component';

const GameContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
`;

function GamePage(props) {
    return (
        <GameContainer>
            <PlayerPanelComponent/>
            <BoardComponent/>
            <PlayerPanelComponent/>
        </GameContainer>
    );
}

export default GamePage;