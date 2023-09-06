import { useState } from "react";
import Case from "./Case";
import "../css/game.css";

function Game({...gameConfig }) {

    // console.log(gameConfig);

    const [gameBoard, setGameBoard] = useState(gameConfig.damier);
    const [currentPlayer, setCurrentPlayer] = useState(gameConfig.players.p1.name);
    const [logo, setLogo] = useState("X");

    const items = Array(9).fill(null);

    const handleClick = (id) => {
        setCurrentPlayer(gameConfig.players.p2.name);
        setLogo("O");
        if(currentPlayer === gameConfig.players.p2.name)
        {
            setCurrentPlayer(gameConfig.players.p1.name)
            setLogo("X");
        }

    }

    const newGame = () => {

    }

    return (
    
        <div className="board_container">
            <h1>{gameConfig.players.p1.name} VS {gameConfig.players.p2.name}</h1>
            <h2>Au tour de {currentPlayer} avec les {logo}</h2>
            <div className="board">
                { items.map((item, index) => 

                    <Case id={index} fill={item} handleClick={handleClick}/> 
                
                )}
            </div>
        </div>
    );
}

export default Game;