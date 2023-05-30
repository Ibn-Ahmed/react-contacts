import React, { Component, useState } from 'react'
import './ContactsForm.css'

class ContactsForm extends Component{
    
    state = {
       name : "",
        number: "",
        location : ""
    }
    onChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
   
    submitForm = (e)=>{
        e.preventDefault();
        this.props.send({"name":this.state.name,"number":this.state.number, "location":this.state.location})
        // console.log(this.state.name,this.state.number,this.state.location)
        this.setState({
            name:"",
            number:"",
            location:""
        })

    }
    render() {
  return (
    <div className='main-container'>
    <div className='wrapper'>
    <form onSubmit={this.submitForm}>
    <div className="mb-3">
      <label className="form-label">Name</label>
      <input type="name" className="form-control" name='name'  onChange={this.onChange} value={this.state.name}/>
      
    </div>
    <div className="mb-3">
      <label className="form-label">Phone Number</label>
      <input type="text" className="form-control" name='number' value={this.state.number} onChange={this.onChange}/>
      
    </div>
    <div className="mb-3">
      <label className="form-label">Location</label>
      <input type="text" className="form-control" name='location' value={this.state.location} onChange={this.onChange} />
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  </div>
  )
}
}

export default ContactsForm
