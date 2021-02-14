import React, {useState, useEffect} from 'react';

export const GameContext = React.createContext();

const GameContextProvider = (props) => {

    const [activeCards, setActiveCards] = useState([]);

    const [isShadow, setIsShadow] = useState(false);

    const [currentPlayer, setCurrentPlayer] = useState(true);

    const cardSelect = (cardId) => {
        if(activeCards.length < 2) {
            setActiveCards(prevState => [...prevState, cardId]);
        }
        else {
            setActiveCards([]);
        }
    }

    const RemoveSelected = () => {
        const cards = document.querySelectorAll('.card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('selected');
        }
        setActiveCards([]);
    }

    const addCollected = () => {
        const selected = document.querySelectorAll('.selected');
        for (let i = 0; i < selected.length; i++) {
            selected[i].classList.add('collected');
        }
    }

    const setPlayer = () => {
        setCurrentPlayer(prevState => !prevState);
    }

    const cardCheck = () => {
        if(activeCards.length == 2) {
            if(activeCards[0] === activeCards[1]) {
                addCollected();
                RemoveSelected();
                alert('GOOD');
            }
            else {
                // RemoveSelected();
                setIsShadow(true);
                alert('BAD');
                // setPlayer();
            }
        }
    }

    useEffect(()=> {
        cardCheck();
    }, [activeCards])

    return (
        <GameContext.Provider value={{
            cardSelect,
            activeCards,
            setActiveCards,
            isShadow,
            setIsShadow,
            RemoveSelected
        }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;
