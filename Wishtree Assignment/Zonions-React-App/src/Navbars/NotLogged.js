import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class NotLogged extends Component {

    //Navbars to Show
    render() {
        return (
            <div>
                <div>
                    <h1>Zonions</h1>
                </div>
                <div className="pt-3">
                <NavLink to="/home" className="link">Home</NavLink>
                <NavLink to="/login" className="link" style={{paddingLeft:"40px"}}>Login</NavLink>
                </div>
            </div>
        )
    }
}

export default NotLogged
