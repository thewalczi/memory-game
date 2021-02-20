import React, { useState, useEffect } from 'react';

export const BoardContext = React.createContext();

const BoardContextProvider = (props) => {

    const [boardConfig, setBoardConfig] = useState(
        {
            size: {
                small: 24,
                medium: 36,
                large: 48
            }
        }
    )

    const [boardArray, setBoardArray] = useState([]);

    const [boardSize, setBoardSize] = useState(24);

    const GetBoardArray = (size) => {
        let image;
        let number;
        let array = [];
        setBoardArray([]);
        for (let i = 0; i < size / 2; i++) {
            number = RandomNumber(0, 200);
            image = `https://picsum.photos/id/${number}/300/`;
            array.push({number: number, img: image});
        }
       array = ShuffleBoard(array.concat(array));
       setBoardArray(array.map((card, i) => {
            return {...card, id: i};
       }))
       
    }
    
    const RandomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const ShuffleBoard = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    useEffect(() => {
        GetBoardArray(boardSize);
        console.log(boardArray);
    }, [boardSize]);

    return (
        <BoardContext.Provider value={{
            boardArray,
            boardSize,
            setBoardSize,
            boardConfig
        }}>
            {props.children}
        </BoardContext.Provider>
    );
}

export default BoardContextProvider;

