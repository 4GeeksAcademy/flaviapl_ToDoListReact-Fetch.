import React from "react";

const Test = () => {

    function addTask() {
        console.log("aggiungi task");
        
        const requestOption = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                "label": "from React2",
                "is_done": true
                }
            )
        }
        fetch("https://playground.4geeks.com/todo/todos/flavia_pl", requestOption)
        .then((response) => response.json())
        .then( (data) => console.log(data) )  
    }


function deleteTask() {
    console.log("rimuovi task");

    const requestOption2 = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
    }
    fetch("https://playground.4geeks.com/todo/todos/110", requestOption2)
    .then((data) => console.log(data)
    )
}


function downloadTask() {
    console.log("carica task");

    fetch("https://playground.4geeks.com/todo/users/flavia_pl")
    .then((response) => response.json())
    .then((data) => console.log(data))
}

    return (
        <>
            <h1>HOLA</h1>
            <button onClick={addTask}>ADD TASK</button>
            <button onClick={deleteTask}>DELETE TASK</button>
            <button onClick={downloadTask}>DOWNLOAD TASK</button>
        
        </>

    )
}

export default Test