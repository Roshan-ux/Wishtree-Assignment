import React, { Component } from 'react'
import APIServices from './APIServices'
import {NavLink } from 'react-router-dom'

class RestaurentDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            restaurent_name: '',
            address: '',
            open_time: '',
            close_time: '',
            phone: '',
            menu_img: ''
        }
    }

           //Fetching Data by Restaurent ID
    componentDidMount() {
        let rest_id = sessionStorage.getItem("Id_from_home")

        APIServices.getRestaurentDetails(rest_id)
        .then( res =>{
            let data = res.data

            this.setState({
                restaurent_name: data.r_name,
            address: data.address,
            open_time: data.open_time,
            close_time: data.close_time,
            phone: data.phone,
            menu_img:data.img_path
            })

        }).catch(error =>{
            alert("Data Not Fetched")
            console.log(error)
        })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h1>Zonions</h1>
                </div>
                <div className="pt-3">
                    <NavLink to="/home" className="link">Home</NavLink>
                </div>
                <div className="pt-3">
                    <NavLink exact to="/" className="btn btn-primary" >Back</NavLink> 
                </div>
                <div className="container-fluid mb5 pt-3" style={{ paddingLeft: "60px" }} >

                    <h2><label className="form-label">Restaurent Name :</label>
                    <label className="pl-3">{this.state.restaurent_name}</label></h2>

                    <h4><label className="form-label">Address :</label>
                    <label style={{ paddingLeft: "90px" }}>{this.state.address}</label></h4>

                    <h4><label className="form-label">Opening Time :</label>
                    <label style={{ paddingLeft: "20px" }}>{this.state.open_time}</label></h4>

                    <h4><label className="form-label">Closing Time :</label>
                    <label style={{ paddingLeft: "35px" }}>{this.state.close_time}</label></h4>

                    <h4><label className="form-label">Phone No. :</label>
                    <label style={{ paddingLeft: "58px" }}>{this.state.phone}</label></h4>
                    <hr></hr>
                    <h4>Menu Image : </h4><br/>
                    <div style={{textAlign:"center"}}>
                        
                        <img src={this.state.menu_img} alt="Menu_Image" style={{width:"1000px"}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurentDetails
