import styled from "styled-components";
import React, { useContext, useState } from "react";
import Card from "./Card.component";
import { BoardContext } from "../contexts/Board.context";

const BoardContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 1 1 60%;
    position: relative;
`;

const CardGrid = styled.div`
    display: grid;
    grid-gap: 10px;
    width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    height: 100%;
    padding: 0 10px;
`;

const BoardShadow = styled.div`
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    &.shadow-visible {
        display: block;
    }
`;


const BoardComponent = () => {
    
    const { boardArray, isShadow, setIsShadow, RemoveSelected } = useContext(BoardContext);    

    const handleClick = () => {
        setIsShadow(false);
        RemoveSelected();
    }

    return (
        <BoardContainer>
            <CardGrid boardArray={boardArray}>
                {boardArray.map((item, i) => {
                    return (
                        <Card key={i} img={item.img} id={item.id}/>
                    );
                })}
            </CardGrid>
            <BoardShadow class={isShadow ? 'shadow-visible' : null} onClick={handleClick}/>
        </BoardContainer>
    )
}

export default BoardComponent;