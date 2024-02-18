import React, { useState } from 'react';
import './Visitors.css'



import { Form, Link } from 'react-router-dom'; 

type Props = {}

const  Visitors = (props: Props) => {

  
  const [formData, setFormData] = useState({
    VisitorName: 'string',
    Phone: 'string',
   ApartmentNumber: 'string',
   EventDate: 'string'
  })

  const [errors, setErrors] = useState({})

  const handleChange = (Event:any) => {
    const {name, value} = Event.target;
    setFormData({
        ...formData, [name] : value
    })
  }

  
  const handleSubmit = (e:any) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.VisitorName.trim()) {
        validationErrors.VisitorName = "* VisitorName is required"
    }

    if(!formData.Phone.trim()) {
      validationErrors.Phone = "*Phone is required"
  } else if(formData.Phone.length < 11){
      validationErrors.Phone = "Phone should be at least 11 char"
  }

    

    if(!formData.EventDate.trim()) {
      validationErrors.EventDate = "* EventDate is required"
    }
  

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }


  


    
  return (
  <div className='all'>

    <nav className='navbar'>
      
    <ul className='navbar-links'>
        <Link to='/HomePage'><li className='navbar-link'>Home</li></Link>
        <li className='navbar-link'>Visitors</li>
        <li className='navbar-link'>Home services</li>
        <li className='navbar-link'>marketing</li>
        <li className='navbar-link'>Billing services</li>

       </ul>

    </nav>




{/* Validation Form */}


 
<form onSubmit={handleSubmit}>
  <div>
    
    <h1>
  Enter your details to request a visit
  </h1>
    
  
      <div>
        <label>VisitorName:</label>
        <input
          type="text"
          name="VisitorName"
          placeholder='Enter Your Visitor Name'  
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.VisitorName && <span className='error'>{errors.VisitorName}</span>}  
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="Phone"
          name="Phone"
          placeholder='Enter Your Phone Number'
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.Phone && <span className='error'>{errors.Phone}</span>}  
      </div>
      <div>
        <label>ApartmentNumber:</label>
        <input
          type="text"
          name="ApartmentNumber"
          placeholder='Enter Your Apartment Number'
          onChange={handleChange} 
        />
          {errors.ApartmentNumber && <span className='error'>{errors.ApartmentNumber}</span>}  
      </div>
      <div>
        <label>EventDate:</label>
        <input
          type="date"
          name="EventDate"
          placeholder='Enter Your Event Date'
          onChange={handleChange} 
        />
          {errors.EventDate && <span className='error'>{errors.EventDate}</span>}  
      </div>
      <button type="submit">Send</button>
      </div>
    </form>
</div>




   
    
  )
}


export default Visitors