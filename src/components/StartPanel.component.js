import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BoardContext } from '../contexts/Board.context';
import ButtonComponent from './Button.component';

const Panel = styled.div`
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: #fff;
    font-size: 48px;
    font-family: sans-serif;
    font-weight: normal;
    text-align: center;
`;

const StartPanelComponent = ({gameName}) => {

    const {boardConfig} = useContext(BoardContext);

    return (
        <Panel>
            <Title>{gameName}</Title>
            {boardConfig.map((item, i) => {
                return <ChooseSizeButton key={i} boardSize={item}/>
            })}
        </Panel>
    );
}

const ChooseSizeButton = ({boardSize}) => {
    return (
        <Link to="/game">
            <ButtonComponent boardSize={boardSize}/>
        </Link>
    )
}

export default StartPanelComponent;