import React, {useState, useEffect, useContext} from 'react';
import { BoardContext } from './Board.context';

export const GameContext = React.createContext();

const GameContextProvider = (props) => {

    const { boardSize } = useContext(BoardContext);

    const [gameStart, setGameStart] = useState(false);
    const [cardsArray, setCardsArray] = useState([]);
    const [movesCounter, setMovesCounter] = useState(0);
    const [player1Score, setPlayer1Score] = useState(0);

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
        if(cardsArray.length === 2){
            setTimeout(() => {
                if(cardsArray[0].number === cardsArray[1].number){
                    setCollected();
                    setPlayer1Score(player1Score + 1);
                }
                else {
                    setHidden();
                }
                setCardsArray([]);
            }, 1000)
            setMovesCounter(movesCounter + 1);
        }
    }, [cardsArray]);

    useEffect(() => {
        console.log(boardSize);
        if(player1Score === boardSize / 2) {
            setGameStart(false);
            console.log('end game');
        }
        console.log(player1Score);
    }, [player1Score])

    return (
        <GameContext.Provider value={{
            addCard,
            cardsArray,
            movesCounter,
            player1Score,
            gameStart,
            setGameStart
        }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;
