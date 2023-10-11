import "./ShowUseronScreen.css"
const ShowUseronScreen=(props)=>
{
return (
    <div  >
        <div className="card-style"  ><h5>{`${props.name.charAt(0).toUpperCase() + props.name.slice(1)}(${props.age} Years old) `}</h5></div>
        
    </div>
)
}
export default ShowUseronScreen;