import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <div>
          <form className="logForm">
        <div className="login">
          <label className="form-label">Username</label>
          <input type="email" className="form-control"/>
          
        </div>
        <div className="login">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="login">
          <input type="checkbox" className="form-check-input"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn-primary hover">Submit</button>
        <p>Don’t have an account?<NavLink to='/account'>Join</NavLink></p>
      </form>
    </div>
  )
}
