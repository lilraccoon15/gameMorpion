import { useState } from "react";
import Login from "./components/Login";
import Game from "./components/Game";
import "./css/app.css"

const App = () => {

    const [gameConfig, setGameConfig] = useState({
        damier : [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    });

    const [display, setDisplay] = useState(false);


    const onHandleUsers = (players) => {
        setGameConfig({
            ...gameConfig,
            players
        })
        setDisplay(true)
    }

    // use effet pour damier quand utilisateurs set

    return (
        <>
            <div className="app">
                {JSON.stringify(gameConfig)}
                { display ? <Game {...gameConfig}/> : <Login onHandleUsers={onHandleUsers} /> }
            </div>
        </>
    )
}

export default App;