import styled from "styled-components/macro";
import React, { useContext } from "react";
import Card from "./Card.component";
import { BoardContext } from "../contexts/Board.context";

const BoardContainer = styled.div`
    width: 100%;
    flex: 1 1 100%;
    position: relative;

    &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;

const CardGrid = styled.div`
    position: absolute;
    height: 100%;
    display: grid;
    grid-gap: 20px;
    width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(${props => Math.floor(Math.sqrt(props.boardArray.length))}, 1fr);
    grid-template-rows: auto;
    height: 100%;
`;

const BoardComponent = () => {
    
    const { boardArray } = useContext(BoardContext);    

    return (
        <BoardContainer>
            <CardGrid boardArray={boardArray}>
                {boardArray.map((item, i) => {
                    return (
                        <Card key={i} icon={item.icon} id={item.id} item={item}/>
                    );
                })}
            </CardGrid>
        </BoardContainer>
    )
}

export default BoardComponent;
