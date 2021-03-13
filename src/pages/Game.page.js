import React from 'react';
import styled from "styled-components/macro";
import BoardComponent from '../components/Board.component';
import StatsBar from '../components/StatsBar.component';
import {wrapper} from '../styles/mixins.styles';

const GameContainer = styled.div`
    ${wrapper};
    flex-direction: column;
    justify-content: center;
`;

function GamePage(props) {
    return (
        <GameContainer>
            <BoardComponent/>
            <StatsBar/>
        </GameContainer>
    );
}

export default GamePage;