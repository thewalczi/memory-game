import React, { useContext } from 'react';
import styled from "styled-components/macro";
import { GameContext } from '../contexts/Game.context';
import { color } from '../styles/global-variables.styles';
import { tile } from '../styles/mixins.styles';

const CardWrapper = styled.div`
    ${tile};
    width: auto;
    height: auto;
    background-image: url(${props =>(props.img)});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    overflow: hidden;

    &:before {
        background: ${color.darknavy};
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0;
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

    const { addCard, cardsArray, setGameStart } = useContext(GameContext);

    const handleClick = (card) => {
        if(cardsArray.length < 2 && cardsArray[0]?.id !== card.id) {
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

export default Card;
