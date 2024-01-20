function ButtonDance ({chosenDance}){
    return(
        <div className="btn">
            <button className="btnDance" onClick ={() => chosenDance('classic')}>Classic Dance</button>
            <button className="btnDance" onClick = {() => chosenDance('modern')}>Modern Dance</button>
            <button className="btnDance" onClick = {() => chosenDance('wedding')}>Wedding Dance</button>
            <button className="btnDance" onClick = {() => chosenDance('kids')}>Kids Dance</button>
        </div>
    )
}
export default ButtonDance;