function Event(){
    function displayInfo1(){
        alert("This is Event concept in Reactjs application");    
    }
    function displayInfo2(){
        alert("This is Event concept in Reactjs application by double click action");
    }
    return(
        <div>
            <button onClick={displayInfo1}>Click me</button>
            <br/>
            <br/>
            <br/>
            <button onDoubleClick={displayInfo2}>Double click me</button>
        </div>
    )
}
export default Event;