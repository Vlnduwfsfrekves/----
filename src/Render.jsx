import React,{Component} from 'react'
class Render extends Component{
    render(){
    const {contacts,filter,deleteContact}=this.props
    const filterA=contacts.filter(contact=>contact.name.toLowerCase().startsWith(filter.toLowerCase()))
    return(
    <ul>
    {filterA.map((item,index)=>(
    <li key={index}>
    {`${item.name} ${item.number}`}
    <button onClick={()=>deleteContact(index)}>Delete</button>
    </li>
    ))}
    </ul>
    )
    }
}
export default Render;