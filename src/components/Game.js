import { useState, useEffect } from "react";
import Case from "./Case";
import "../css/game.css";

function Game({...gameConfig }) {

    // console.log(gameConfig);

    const [gameBoard, setGameBoard] = useState(gameConfig.damier);
    const [currentPlayer, setCurrentPlayer] = useState(gameConfig.players.p1.name);
    const [logo, setLogo] = useState("X");
    const [winner, setWinner] = useState("");

    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    
    const handleClick = (id) => {
        // Recuperer l'id
        // Creer une copie cf : items
        let newArray = [...gameBoard];
        // De cette changer la valeur de l'id
        newArray[id] = logo;
        // Update le gameBoard
        setGameBoard(newArray);
        
        setCurrentPlayer(gameConfig.players.p2.name);
        setLogo("O");
        if(currentPlayer === gameConfig.players.p2.name)
        {
            setCurrentPlayer(gameConfig.players.p1.name)
            setLogo("X");
        }
    }

    const newGame = () => {
        setGameBoard(gameConfig.damier);
        setWinner("");
    }

    useEffect(() => {
        // fonction qui détermine si le jeu est fini ou non
        // logique jeu
        // split gameboard (séparer par ligne, colonne, diagonale)
        // check présence dans caseWinner
        
        wins.map((item, index) => {
            let [a, b, c] = item;
            console.log(gameBoard[a])
            if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c])
            {
                console.log("gagné");
                setWinner(currentPlayer === gameConfig.players.p2.name ? gameConfig.players.p1.name : gameConfig.players.p2.name)
            }
        })

    }, [gameBoard])

    return (
    
        <div className="board_container">
            <h1>{gameConfig.players.p1.name} VS {gameConfig.players.p2.name}</h1>
            <h2>{winner === "" ? 'Au tour de '+currentPlayer+' avec les '+logo : "Bravo "+winner+" a gagné !"}</h2>
            <h2></h2>
            <div className="board">
                { gameBoard.map((item, index) => 

                    <Case id={index} fill={item} handleClick={handleClick} winner={winner}/> 
                
                )}
            </div>
            <button onClick={newGame}>Nouvelle partie</button>
        </div>
    );
}

export default Game;