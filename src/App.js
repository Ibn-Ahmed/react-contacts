import React, { useEffect, useState } from 'react'
import Contacts from './Contacts'
import ContactsForm from './ContactsForm'

function App() {
const allContacts = localStorage.getItem('contacts')
console.log(allContacts)
  const [contacts,setContacts] = useState([allContacts])


const getData = (data)=>{
   console.log(data.name)
    setContacts([...contacts,{name:data.name,number:data.number,location:data.location}])
}

useEffect(()=>{
  localStorage.setItem("contacts",JSON.stringify(contacts))
},[contacts])
  return (
    <div>
      <h1>Contact Info</h1>
       <Contacts contacts = {contacts}/>
       <ContactsForm send={getData}/>
    </div>
  )
}

export default App
