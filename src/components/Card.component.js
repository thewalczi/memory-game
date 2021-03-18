import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components/macro";
import { GameContext } from '../contexts/Game.context';
import { BoardContext } from '../contexts/Board.context';
import { color } from '../styles/global-variables.styles';
import { tile } from '../styles/mixins.styles';
import {
    Airplane,
    Alarm, 
    Anchor, 
    Attachment, 
    Bell, 
    Bolt, 
    Bulb, 
    Cloud, 
    ColorBucket, 
    Eye, 
    Flag, 
    Heart, 
    LockUnlock, 
    Mic, 
    Music, 
    Pacman, 
    ShapeHexagon,
    ShoppingCart
} from 'css.gg';

const CardWrapper = styled.div`
    ${tile};
    width: auto;
    height: auto;
    // background-image: url(${props =>(props.img)});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;

    &:before {
        background: ${color.darknavy};
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0;
        z-index: 100;
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

    .card-icon {
        transform: scale(3);
        align-self: center;
    }

`;

const Card = React.memo(({icon, id, item}) => {

    const { addCard, cardsArray, setGameStart } = useContext(GameContext);
    const { icons } = useContext(BoardContext);

    const [iconComponents, setIconComponents] = useState({
        airplane: Airplane,
        alarm: Alarm, 
        anchor: Anchor, 
        attachment: Attachment, 
        bell: Bell, 
        bolt: Bolt, 
        bulb: Bulb, 
        cloud: Cloud, 
        colorBucket: ColorBucket, 
        eye: Eye, 
        flag: Flag, 
        heart: Heart, 
        lockUnlock: LockUnlock, 
        mic: Mic, 
        music: Music, 
        pacman: Pacman, 
        shapeHexagon: ShapeHexagon,
        shoppingCart: ShoppingCart 
    });

    const handleClick = (card) => {
        if(cardsArray.length < 2 && cardsArray[0]?.id !== card.id) {
            setGameStart(true);
            addCard(card);
        }
    }

    const IconComponent = iconComponents[icon];

    return (
        <CardWrapper 
            id={id}
            onClick={() => handleClick(item)}
            data-status="false"
        >
            <IconComponent className="card-icon"/>
        </CardWrapper>
    )
});

export default Card;
