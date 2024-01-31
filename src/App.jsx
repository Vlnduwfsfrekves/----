import {Component} from 'react';
class App extends Component{
    state={
        name: '',
        number:'',
        contacts: [],
        filter: ''
    };
    getName=(e)=>{
        this.setState({name:e.currentTarget.value})
    }
    getNumber=(e)=>{
        this.setState({number:e.currentTarget.value})
    }
    add=()=>{
        if(this.state.name.trim()!== '' && this.state.number.trim()!=='' && !this.state.contacts.includes(`${this.state.name} ${this.state.number}`)){
            this.setState({contacts:[...this.state.contacts,`${this.state.name} ${this.state.number}`]})
        }else{
            alert('sdds')
        }
    }
    deleteContact=(indOfEl)=>{
        const updatedContacts=[...this.state.contacts]
        updatedContacts.splice(indOfEl,1)
        this.setState({contacts:updatedContacts})
    }
    setFilterLetter=(filt)=>{
        this.setState({filter:filt})
    }
    render(){
        const filter=this.state.contacts.filter(contact=>contact.toLowerCase().startsWith(this.state.filter.toLowerCase()))
        return (
            <div className="App">
            <label>
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.getName}
            />
            </label>
            <label>
            <input
            type="tel"
            name="number"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.number}
            onChange={this.getNumber}
            />
            </label>
            <label>
            <button onClick={this.add}>add contact</button>
            </label>
            <label>
            Filter by first letter:
            <input
            type="text"
            name="filterLetter"
            value={this.state.filter}
            onChange={(e)=>this.setFilterLetter(e.currentTarget.value)}
            />
            </label>
            <ul>
            {filter.map((item,index)=>(
            <li key={index}>
            {item} 
            <button onClick={()=>this.deleteContact(index)}>Delete</button>
            </li>
            ))}
            </ul>
            </div>
    )
  }
}
export default App;