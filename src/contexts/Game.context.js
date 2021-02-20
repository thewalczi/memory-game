import React, {useState, useEffect} from 'react';

export const GameContext = React.createContext();

const GameContextProvider = (props) => {

    const [cardsArray, setCardsArray] = useState([]);

    const addCard = (card) => {
        setCardsArray(prevState => [...prevState, card]);
    };

    const statusChange = (status) => {
        cardsArray.map(card => {
            let selected = document.getElementById(`${card.id}`);
            return selected.setAttribute('data-status', status);
        })
    }

    const setSelected = () => {
        statusChange('selected');
    }

    const setHidden = () => {
        statusChange('hidden');
    }

    const setCollected = () => {
        statusChange('collected');
    }

    useEffect(() => {
        if(cardsArray.length <= 2){
            setSelected();
        }
        if(cardsArray.length == 2){
            setTimeout(() => {
                if(cardsArray[0].number == cardsArray[1].number){
                    setCollected();
                }
                else {
                    setHidden();
                }
                setCardsArray([]);
            }, 1000)
        }
    }, [cardsArray]);

    return (
        <GameContext.Provider value={{
            addCard,
            cardsArray
        }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;
