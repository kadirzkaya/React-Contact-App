import { useState } from 'react';
import './App.css';
import ContactAdd from './component/ContactAdd';
import ContactList from './component/ContactList';
import ContactSearch from './component/ContactSearch';

const itemList=[{
  name:"Zeynep",
  phone:"555444"
},{
  name:"Kadir",
  phone:"111333"
},{
  name:"Mehmet",
  phone:"777888"
}]

function App() {
  const [contactList,setContactList]=useState(itemList)
  const [filterList,setFilterList]=useState(contactList)

  const handleFilter=(search)=>{
    let updatedList=[...contactList];

      updatedList=updatedList.filter((item)=>{
        return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || item.phone.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })
 

    setFilterList(updatedList);
  }

  const addListItem=(name,phone)=>{
    setContactList([...contactList,{name,phone}])
    setFilterList([...filterList,{name,phone}])
  }

  return (
    <div className="App">
      <h2 className='header'>CONTACTS</h2>
      <ContactSearch handleSubmit={handleFilter}/>
      <ContactList list={filterList}/>
      <ContactAdd handleAddSubmit={addListItem}/>
    </div>
  );
}

export default App;
