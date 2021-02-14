import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BoardContext } from '../contexts/Board.context';
import ButtonComponent from './Button.component';

const Panel = styled.div`
    width: 90%;
    max-width: 500px;
    height: 90%;
    max-height: 400px; 
    border: 1px solid #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Title = styled.h1`
    color: #fff;
    font-size: 48px;
    font-family: sans-serif;
    font-weight: normal;
    text-align: center;
`;

function StartPanelComponent({gameName}) {

    const {boardConfig} = useContext(BoardContext);
    
    return (
        <Panel>
            <Title>{gameName}</Title>
            <Link to="/game">
                <ButtonComponent label={'small board'} size={boardConfig.size.small}/>
            </Link>
            <Link to="/game">
                <ButtonComponent label={'medium board'} size={boardConfig.size.medium} />
            </Link>
            <Link to="/game">
                <ButtonComponent label={'large board'} size={boardConfig.size.large} />
            </Link>
        </Panel>
    );
}

export default StartPanelComponent;