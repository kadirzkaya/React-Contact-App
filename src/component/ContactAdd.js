import React, { useState } from 'react'

function ContactAdd({handleAddSubmit}) {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");

    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    
    const handleChangePhone=(e)=>{
        setPhone(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (name!=="" && phone!=="") {
            handleAddSubmit(name,phone);            
        }
        setName("");
        setPhone("");
    }

  return (
    <div className='addForm'>
        <form onSubmit={handleSubmit}>
            <input placeholder='Full Name' value={name} name='name' onChange={handleChangeName}/>
            <input placeholder='Phone Number' value={phone} name='phone' onChange={handleChangePhone} type='number'/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default ContactAdd