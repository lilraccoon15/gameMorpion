import { useState } from "react";
import Login from "./components/Login";

const App = () => {

    const [gameConfig, setGameConfig] = useState({
        damier : [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    });

    const onHandleUsers = (players) => {
        setGameConfig({
            ...gameConfig,
            players
        })
    }

    // use effet pour damier quand utilisateurs set

    return (
        <>
            <Login onHandleUsers={onHandleUsers}/>
        
        </>
    )
}

export default App;