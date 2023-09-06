import "../css/case.css";

const Case = ({id, fill, handleClick}) => {

    return(
        <>
            <div className="card" onClick={() => handleClick(id)}>{fill}</div>
        </>
    )
}

export default Case;