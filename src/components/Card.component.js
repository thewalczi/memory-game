import React, { useContext } from 'react';
import styled from "styled-components/macro";
import { GameContext } from '../contexts/Game.context';

const Card = React.memo(({img, id, item}) => {

    const { addCard, cardsArray, setGameStart } = useContext(GameContext);

    const handleClick = (card) => {
        if(cardsArray.length < 2 && cardsArray[0]?.id != card.id) {
            setGameStart(true);
            addCard(card);
        }
    }

    return (
        <CardWrapper
            img={img}   
            id={id}
            onClick={() => handleClick(item)}
            data-status="false"
        >
        </CardWrapper>
    )
});

const CardWrapper = styled.div`
    width: auto;
    height: auto;
    background-image: url(${props =>(props.img)});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0px 5px #222e44;

    &:before {
        background: #222e44;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    &[data-status='hidden']{
        &:before {
            display: block;
        }
    }

    &[data-status='selected']{
        &:before {
            display: none;
        }
    }

    &[data-status='collected']{
        visibility: hidden;
    }

`;


export default Card;
