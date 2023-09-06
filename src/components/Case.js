import "../css/case.css";

const Case = ({id, fill, handleClick, winner}) => {

    return(
        <>
            { fill || winner != "" ? <div className="card">{fill}</div> : <div className="card" onClick={() => handleClick(id)}>{fill}</div> }
        </>
    )
}

export default Case;