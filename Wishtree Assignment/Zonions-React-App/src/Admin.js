import React, { Component } from 'react'
import APIServices from './APIServices'
import { withRouter } from 'react-router-dom'
import LoggedInNav from './Navbars/LoggedInNav'

class Admin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             all_restaurents:[],
        }
    }
    
    //Getting the List of Restaurent
    componentDidMount(){
        APIServices.getRestaurents()
        .then(res =>{
            let restaurents = res.data
            this.setState({
                all_restaurents:restaurents
            })
        }).catch(error =>{
            alert("Something Wrong ")
            console.log(error);
        })
    }

    //Edit Function and Redirecting to Edit Component
    edit(id,event){
        sessionStorage.setItem("rest_id",id);
        this.props.history.push('/edit')
    }

    //Redirecting to Add Restaurent Component
    add_restaurent(){
        sessionStorage.removeItem("rest_id");
        this.props.history.push('/add_restaurent')
    }

    //Deleting Restaurent Details
    delete(rest_id,e){
        APIServices.delete(rest_id)
        .then(res =>{
            if(res.status===200){
                console.log(res.data)
                alert("Deleted")
            }
        })
        .catch(error =>{
            alert("Not Deleted! Server Side Problem")
            console.log(error);
        })
    }


    render() {
        const restaurents =this.state.all_restaurents
        return (
            <div className="container">
                <LoggedInNav />
                <div className="container pt-3 " style={{textAlign:"center"}}>
                    <button onClick={(e)=>this.add_restaurent(e)} className="btn btn-primary" >Add Restaurent</button>
                </div>
            <div className="container pt-4">
                <table >
                    <tbody>
                        <tr >
                            <th className="pr-3">Sr. No.</th>
                            <th className="pr-3">Restaurent Name</th>
                            <th className="pr-3">Opening Time</th>
                            <th className="pr-3">Close Time</th>
                            <th className="pr-3">Last Updated</th>
                            <th className="pr-3">Action Edit</th>
                            <th className="pr-3">Action Delete</th>
                        </tr>
                        {
                            restaurents===null?null:restaurents.map((restaurent,i)=>{
                                return<tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{restaurent.r_name}</td>
                                    <td>{restaurent.open_time}</td>
                                    <td>{restaurent.close_time}</td>
                                    <td>{restaurent.date}</td>
                                    <td><button onClick={(e)=>{this.edit(restaurent.rest_id,e)}} className="btn btn-success">Edit</button></td>
                                    <td><button onClick={(e)=>{this.delete(restaurent.rest_id,e)}} className="btn btn-danger">Delete</button></td>
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

export default withRouter(Admin)
