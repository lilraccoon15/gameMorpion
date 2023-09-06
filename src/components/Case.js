import "../css/case.css";

const Case = ({id}) => {
    
    const handleClick = () => {

    }

    return(
        <>
            <div className="card" onClick={handleClick}>{id}</div>
        </>
    )
}

export default Case;