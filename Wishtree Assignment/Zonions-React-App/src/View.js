import React, { Component } from 'react'
import Admin from './Admin'
import Home from './Home'


class View extends Component {

    constructor(props) {
        super(props)
        
        let token=sessionStorage.getItem("log_token")
        this.state = {
             isLogged:token
        }
    }

    
    render() {
        //Displaying Header After Admin Login
        if(this.state.isLogged){
            return(
                <>
                    <Admin />
                </>
            )
        }
        // Displaying Header When Admin is Not Logged In
        return (
            <>  
                <Home/>
            </>
        )
    }
}

export default View
