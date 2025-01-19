import React, { useState } from "react";

const TodoList = ( ) => {
    const [input, setInput] = useState ("")
    const[tasks, setTasks] = useState ([])
    const [hovered, setHovered] = useState (null)
   
function addTask (e) {
    if (e.key === "Enter"){
    setTasks([...tasks, input]);
    setInput("");
    }
}

function removeTask(index) {
   setTasks (tasks.filter((item, i) =>
    i !== index))
}

function showX(index) {
    setHovered(index)
    console.log("hovered");
    
}

function hideX(){
    setHovered(null)
}

    return (
        <>
            <div className="container" style={{border:"0", height:"650px", width:"800px", backgroundColor:"rgb(243, 243, 243)", marginTop:"25px"}}>
                <h1 style={{textAlign:"center", fontSize:"105px", fontWeight:"100", marginTop:"30px", color: "rgb(236, 220, 221)", fontFamily:"Roboto", paddingTop:"10px"}}>todos</h1>
                <ul style={{listStyle:"none", position:"relative", zIndex:"2", marginRight:"80px"}}>
                    <li><input type="text" value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={addTask} className="form-control" id="input" placeholder="What needs to be done?" style={{fontFamily:"Roboto", fontWeight:"360", fontSize:"26px", color:"rgb 108, 108, 108", boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.1)", border: "solid rgb(221, 221, 221) 1px", borderBottomWidth:"inherit", marginTop:"0px", width:"600px", height:"65px", margin: "0 auto", borderRadius:"0px", backgroundColor:"rgb(249, 249, 249)", paddingLeft:"60px"}}/></li>
                    {tasks.length === 0 ? (<li style={{fontFamily:"Roboto", fontWeight:"360", fontSize:"24px", color:"lightgrey", boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)", backgroundColor:"rgb(249, 249, 249)", border: "solid rgb(221, 221, 221) 1px", borderBottomWidth:"inherit", marginTop:"0px", width:"600px", height:"65px", margin: "0 auto", display:"flex", alignItems: "center", justifyContent:"space-between", paddingLeft: "180px", paddingRight:"10px"}}>
                        No tasks, add a task
                    </li>
                ) : (
                        tasks.map((item, index) => (<li style={{fontFamily:"Roboto", fontWeight:"360", fontSize:"26px", backgroundColor:"rgb(249, 249, 249)", border: "solid rgb(221, 221, 221) 1px", marginTop:"0px", width:"600px", height:"65px", margin: "0 auto", display:"flex", alignItems: "center", justifyContent:"space-between", paddingLeft: "60px", paddingRight:"10px", fontSize:"20px"}} onMouseEnter={()=>showX(index)} onMouseLeave={()=>hideX(index)}>{item} {hovered === index && (<i className="fa-solid fa-x" style={{cursor: "pointer", color: "red", paddingRight:"10px"}}onClick={()=>removeTask(index)}></i>
                    )}
                    </li>)))}
                    <p style={{fontFamily:"Roboto", fontWeight:"360", fontSize:"15px", color:"gray", boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)", backgroundColor:"rgb(249, 249, 249)", border: "solid rgb(221, 221, 221) 1px", marginTop:"0px", width:"600px", height:"45px", margin: "0 auto", display:"flex", alignItems: "center", paddingLeft: "10px"}}>{tasks.length} item left</p>
                    <div style={{border: "solid rgb(221, 221, 221) 1px", height:"7px", width:"594px", boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)", backgroundColor:"rgb(249, 249, 249)", marginTop:"5px", zIndex:"1", position:"absolute", left:"67px", bottom:"-7px" }}></div>
                    <div style={{border: "solid rgb(221, 221, 221) 1px", height:"9px", width:"585px", boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)", backgroundColor:"rgb(249, 249, 249)", marginTop:"5px", zIndex:"0", position:"absolute", left:"72px", bottom:"-13px"}}></div>
                </ul>
            </div>
        </>
    )
}


export default TodoList