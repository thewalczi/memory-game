import React, { useContext } from 'react';
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
        background: #777777;
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

const Card = React.memo(({img, id, item}) => {

    const { addCard, cardsArray } = useContext(GameContext);

    const handleClick = (card) => {
        if(cardsArray.length < 2 && cardsArray[0]?.id != card.id) {
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


export default Card;
