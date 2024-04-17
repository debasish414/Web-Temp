import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CreateAccount() {
  return (
    <>
      <div className="createAccount">
        <h1>Join Chandan Fertilizer</h1>
        <p>Already have an account?<NavLink to='/login'>Login</NavLink></p>

        <form className="accForm">
          <div>
            <input type="text" id="firstName" className="formControl" placeholder="First Name" />
            <input type="text" id="lastName" className="formControl" placeholder="Last Name" />
          </div>
          <div >
            <input type="text" id="eMail" className="formControl" placeholder=" E-mail" />
            <div className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div>
            <input type="text" id="userName" className="formControl" placeholder="Username@1234" />
          </div>
          <div>
            <input type="password" className="formControl" placeholder="password" />
              <input type="password" className="formControl" placeholder="Confirm password" />
          </div>
          <button className="btnPrimary hover" >Join</button>
        </form>

      </div>
    </>
  )
}
