import React from 'react'

function ContactList({list}) {

    const renderedList=list.map((listItem,i)=>{
        return (
            <li key={i}>
                <span>{listItem.name}</span>
                <span>{listItem.phone}</span>
            </li>
        )
    })
  return (
    <div className='list'>
        <ul className='listItem'>
            {renderedList}
            <p>
            Total Contacts: ({list.length})
            </p>
        </ul>
        
    </div>
  )
}

export default ContactList