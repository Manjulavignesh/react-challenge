import React,{useState} from "react";
import "./Forms.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Forms=(props)=>
{
    const [nameValue,setnameValue]=useState("");
    const [ageValue,setageValue]=useState("");
    const nameValueHandler=(e)=>{
        setnameValue(e.target.value);
        
    }
    const ageValueHandler=(e)=>{
        setageValue(e.target.value);
    }
    const submitHandler=(e)=>
    {
e.preventDefault();
const userDetails={
    name:nameValue,
    age:ageValue,
    id:Math.random.toString()
}

props.onAddEventListener(userDetails);
    }
return (
    <div className="card bg-secondary " >
        <div className="card-body" >
    <div className="form-group">
        <form onSubmit={submitHandler}>
        <label  className="form-label"><h5>Username:</h5></label>
        <input tpye="text" className="form-control" onChange={nameValueHandler}/>
        <br/>
        <label className="form-label"><h5>Age (Years)</h5></label>
        <input type="number"className="form-control" onChange={ageValueHandler}/>
        <br/>
        <button className="btn btn-primary" type="submit">Add User</button>
        </form>
        </div>
        </div>
        </div>
    
)
}
export default Forms;