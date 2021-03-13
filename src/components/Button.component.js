import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { BoardContext } from '../contexts/Board.context';
import { tile } from '../styles/mixins.styles';
import { color } from '../styles/global-variables.styles';

const Button = styled.button`
    ${tile};
    background-color: ${color.darknavy};
    border: 2px solid ${color.darknavy};
    padding: 10px;
    margin: 10px 0;
    font-size: 20px;
    width: 200px;
    align-self: center;
    color: #fff;
    
    &:hover {
        background-color: transparent;
        color: #fff;
        cursor: pointer;
    }
`;

const ButtonComponent = ({label, size}) => {

    const { setBoardSize } = useContext(BoardContext);

    const handleClick = (size) => {
        setBoardSize(size);
    }

    return (
        <Button onClick={() => handleClick(size)}>{label}</Button>
    );
}

export default ButtonComponent;
