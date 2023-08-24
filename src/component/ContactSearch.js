import React, { useState } from 'react'

function ContactSearch({handleSubmit}) {
    const [term,setTerm]=useState("");

  return (
    <div>

        <input value={term} placeholder='Search' onChange={(e)=>{
            handleSubmit(e.target.value)
            setTerm(e.target.value);
            }}/>

    </div>
  )
}

export default ContactSearch