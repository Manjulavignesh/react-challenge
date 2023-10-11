import ShowUseronScreen from "./ShowUseronScreen";
const UserList=(props)=>
{
return (
    <ul>
    {props.details.map((item)=>(
        <ShowUseronScreen name={item.name} age={item.age}/>
    ))
    }
    </ul>
)
}
export default UserList;