import { useState } from "react";
import Case from "./Case";
import "../css/game.css";

function Game({...gameConfig }) {

    console.log(gameConfig);

    const [gameBoard, setGameBoard] = useState(gameConfig.damier);
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const items = Array(9).fill(null);

    return (
    
        <div className="board_container">
            <h1>{gameConfig.players.p1.name} VS {gameConfig.players.p2.name}</h1>
            <div className="board">
                { items.map((item, index) => 

                    <Case id={index}/> 
                
                )}
            </div>
        </div>
    );
}

export default Game;