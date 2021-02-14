import React, { useState, useContext, useEffect } from 'react';
import styled from "styled-components";
import { GameContext } from '../contexts/Game.context';

const CardWrapper = styled.div`
    width: auto;
    height: auto;
    background-image: url(${props =>(props.img)});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid #fff;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    &:before {
        content: '';
        background: gray;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    &.selected {
        &:before {
            display: none;
        }
    }
    
    &.collected {
        background: rgba(255, 255, 255, 0);
        &:before {
            display: none;
        }
    }
`;

const Card = ({img, id}) => {

    const { cardSelect, activeCards, setActiveCards } = useContext(GameContext);

    const [ isSelected, setIsSelected] = useState(false);

    const handleClick = (id) => {
        if(activeCards.length < 2 && !isSelected){
            cardSelect(id);
            setIsSelected(true);
        }
        else {
            setActiveCards([]);
        }
        console.log(activeCards);
    }

    useEffect(() => {
        if(activeCards.length == 2){
            setIsSelected(false);
        };
    }, [activeCards]);
    

    return (
        <CardWrapper className={`card ${isSelected ? 'selected' : ''}`} img={img} data-id={id} onClick={() => handleClick(id)}>
        </CardWrapper>
    )
};


export default Card;