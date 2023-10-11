import React,{useState} from "react";
import Forms from './Components/Forms';
import UserList from "./Components/UserList";
import './App.css';
const userArray=[];

function App() {
  const [userValue,setuserValue]=useState(userArray);
  const [isValid,setIsValid]=useState(true);
  const EventListenerHandler=(user)=>
  {
    if(user.name=="" || user.age<0)
    {
      return setIsValid(false);
    }
setuserValue((prevvalues)=>
{
return [user, ...prevvalues];
}
)
  }
  const Alert=()=>
  {
    alert("Invalid Input: plz check input fields");
    setIsValid(true);
  }
  return (
    <div className="App">
      {isValid ?<Forms onAddEventListener={EventListenerHandler}/> : Alert()}
       <UserList details={userValue}/>  
    </div>
  );
}

export default App;
