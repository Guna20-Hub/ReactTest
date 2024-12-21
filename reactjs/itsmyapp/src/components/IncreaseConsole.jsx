function IncreseConsole(){
    let counter=0;
    function updateCounter(){
        ++counter;
    }
    return(
        <div>
            <h2>Intially Counter value is:{counter}</h2>
            <button onClick={updateCounter}>click me</button>
        </div>
    )
}
export default IncreseConsole;