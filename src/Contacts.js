import React from 'react'
function Contacts({contacts}) {
  return (
   
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Number</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
  {contacts?.map(value =>(
    <tr key={value.name}>
      <td>{value.name}</td>
      <td>{value.number}</td>
      <td>{value.location}</td>
    </tr>
      
     ))}
   
  </tbody>
</table>
  )
}

export default Contacts
