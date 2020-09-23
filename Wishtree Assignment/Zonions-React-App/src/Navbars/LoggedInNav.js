import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class LoggedInNav extends Component {
    //Navbar to Show
    render() {
        return (
            <div className="container">
                <div>
                    <h1>Zonions</h1>
                </div>
                <div className="pt-3">
                <NavLink to="/home" className="link">Home</NavLink>
                <NavLink to="/logout" className="link" style={{paddingLeft:"40px"}}>Logout</NavLink>
                </div>
            </div>
        )
    }
}

export default LoggedInNav
