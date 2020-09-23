import React, { Component } from 'react'
import APIServices from './APIServices';
import LoggedInNav from './Navbars/LoggedInNav';
import NotLogged from './Navbars/NotLogged';
import { withRouter } from 'react-router-dom'

class Home extends Component {

    constructor(props) {
        super(props)

        // Getting a Temporary Token to only Show Navbars or Header According
        let token = sessionStorage.getItem("log_token")
        this.state = {
             restaurent_names:[],
             isLogged:token,
        }
    }

    componentDidMount(){
        //Getting Restaurent Names and Id's
        APIServices.getRestaurents()
        .then(res =>{
            let data = res.data
            if(res.status===200){
            this.setState({
                restaurent_names:data
            })
        }
        }).catch(error =>{
            alert("Something Wrong ! Data Not Fetched")
        })
    }

    //Navigating To Restaurent Details Page 
    seeDetails =(id,e)=>{
        sessionStorage.setItem("Id_from_home",id);
        this.props.history.push('/details')
    }

    render() {
        const names =this.state.restaurent_names
        return (
            <div className="container">
                {
                    this.state.isLogged?<LoggedInNav/>:<NotLogged/>
                }
                <div className="pt-5">
                <table>
                <tbody>
                <tr>
                    <th className="pr-5">Sr. No.</th>
                    <th style={{paddingRight:"150px"}}>Restaurent Name</th>
                    <th>View Page</th>
                </tr>
                {
                    names===null?null
                    :names.map( (restaurent, i)=>{return<tr key={i} >
                            <td style={{fontWeight:"bold"}}>{i+1}</td>
                            <td>
                            <p style={{fontWeight:"bold",fontSize:"30px"}}>
                            {restaurent.r_name}
                            </p></td>
                            <td>
                            <button onClick={(e)=>this.seeDetails(restaurent.rest_id,e)} className="btn btn-primary">Click To See</button>
                            
                            </td>
                        </tr>
                    })
                }
                </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);
