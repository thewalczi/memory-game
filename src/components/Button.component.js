import React, { useContext } from 'react';
import styled from 'styled-components';
import { BoardContext } from '../contexts/Board.context';

const Button = styled.button`
    border-radius: 5px;
    border: 1px solid #fff;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    margin: 10px 0;
    color: #fff;
    font-size: 20px;
    width: 200px;
    align-self: center;

    &:hover {
        background-color: rgba(255, 255, 255, 0);
        cursor: pointer;
    }
`;

const ButtonComponent = ({label, size}) => {

    const { setBoardSize } = useContext(BoardContext);

    const handleClick = (size) => {
        console.log(size)
        setBoardSize(size);
    }
    return (
        <Button onClick={() => handleClick(size)}>{label}</Button>
    );
}

export default ButtonComponent;