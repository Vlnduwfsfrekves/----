import {Component} from 'react';
import {nanoid} from 'nanoid'
import Render from './Render';
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
        if(this.state.name.trim()!== '' && this.state.number.trim()!=='' && !this.state.contacts.some(contact => contact.name === this.state.name.trim()) && !this.state.contacts.some(contact => contact.number === this.state.number.trim())){
            this.setState({contacts:[...this.state.contacts,{name:this.state.name,number:this.state.number,id:nanoid()}]})
        }else{
            alert('you need to change this contact because you already have this contact')
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
            <Render contacts={this.state.contacts} filter={this.state.filter} deleteContact={this.deleteContact} />
            </div>
    )
  }
}
export default App;