import React, { useState } from 'react'
import MainInput from '../MainInput'
import Button from '../Button'

import './ContactUs.scss'

const ContactUs = () => {

  const [data, setData] = useState({});

  const sources = [
    {
      id: 'your__name',
      type: 'text',
      placeholder: 'Your Name',
      icon: 'userName',
      checkTheValue: value => value?.length > 0,
      error: "This filed can't be empty!"
    },
    {
      id: 'your__email',
      type: 'email',
      placeholder: 'Email Address',
      icon: 'email',
      checkTheValue: value => value?.includes('@'),
      error: "Email must includes '@'!"
    },
    {
      id: 'mobileNumber',
      type: 'number',
      placeholder: 'Mobile Number',
      icon: 'mobile',
      checkTheValue: value => value?.length > 10,
      error: "Mobile number Must be more than 10 ch!"
    },
    {
      id: 'address',
      type: 'text',
      placeholder: 'Address',
      icon: 'address',
      checkTheValue: value => value?.length > 0,
      error: "This filed can't be empty!"
    },
    // {
    //   id: 'password',
    //   type: 'password',
    //   placeholder: 'Password',
    //   icon: 'password',
    //   checkTheValue: value => value?.length > 6,
    //   error: "Password Must be more than 6 ch!"
    // },
    // {
    //   id: 'confirmPassword',
    //   type: 'password',
    //   placeholder: 'Confirm Password',
    //   icon: 'password',
    //   checkTheValue: (value, password) => value === password,
    //   error: "The confirm password must matched with password!"
    // },
  ];

  return (
   <section className='contact__us__section'>
    <h2 className='section__title'>Contact Us</h2>
    <div className="container">
      <form className='contact__form' onSubmit={e => e.preventDefault()}>
        <div className="form__inputs">
          {sources.map(input => (
            <MainInput 
              key={input.id}
              name={input.id}
              placeholder={input.placeholder}
              type={input.type}
              data={data}
              setData={setData}
              icon={input.icon}
              checkTheValue={input?.checkTheValue}
              error={input?.error}
            />
          ))}
        </div>
        <div className="btns d-flex align-items-center justify-content-center">
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </div>
   </section>
  )
}

export default ContactUs