import { useState } from "react";

const Login = ({onHandleUsers}) => {

    const [players, setPlayers] = useState({
        p1 : {
            name: "",
            color: "red",
        },
        p2 : {
            name : "",
            color : "green"
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        onHandleUsers(players)
    }

    const handleChange = (e) => {
        if(e.target.id === "p1"){
            setPlayers({
                ...players,
                p1 : {
                    ...players.p1,
                    name : e.target.value
                }
            })
        }else {
            setPlayers({
                ...players,
                p2 : {
                    ...players.p2,
                    name: e.target.value
                }
            })
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Utilisateur 1 :</label>
                <input type="text" id="p1" value={players.p1.name} onChange={handleChange}></input>

                <label>Utilisateur 2 :</label>
                <input type="text" id="p2" value={players.p2.name} onChange={handleChange}></input>

                <button disabled={players.p1.name === "" && players.p2.name === ""}>Lancer la partie</button>
            </form>
        </>
    )
}

export default Login;