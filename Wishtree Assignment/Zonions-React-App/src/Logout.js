import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Logout extends Component {

    //Removing All Token To Show proper Navbars and Menu's
    constructor(props) {
        super(props)
        sessionStorage.removeItem("log_token")
        sessionStorage.removeItem("Id_from_home");

    }
    

    //Redirecting to Home
    render() {
        return (
            <div>
                <Redirect to="/" />
            </div>
        )
    }
}

export default Logout
