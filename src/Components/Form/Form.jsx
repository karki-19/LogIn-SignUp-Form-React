import React, { useState } from 'react'
import './Form.css'

import user_icon from '../Assests/person.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'

const Form = () => {

  const [action,setAction] = useState("Sign Up");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
      <div className="underline"></div>
      </div>
      <div className="inputs">
        { action =="Log In"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name'/>
        </div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id'/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password"placeholder='Password'/>
        </div>
      </div>
      {action =="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?<span>Click here</span></div>}
        <div className="submit-Container">
          <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Log In")}}>Log In</div>
        </div>
    </div>
  )
}

export default Form