import React, { Component } from 'react'
import APIServices from './APIServices';
import TimePicker from 'react-time-picker';
import LoggedInNav from './Navbars/LoggedInNav';


class EditRestaurent extends Component {
    constructor(props) {
        super(props)

        //Getting Restaurent Id to get Restaurent Details
        let rest_id = sessionStorage.getItem("rest_id");
        this.state = {
            rest_id: rest_id,
            r_name: '',
            address: '',
            phone: '',
            open_time: '',
            close_time: '',
        }
    }

    //Getting Details of Restaurent
    componentDidMount() {

        if (this.state.rest_id != null) {

            APIServices.getRestaurentDetails(this.state.rest_id)       
                .then(res => {
                    let restaurent = res.data
                    this.setState({
                        r_name: restaurent.r_name,
                        address: restaurent.address,
                        phone: restaurent.phone,
                        open_time: restaurent.open_time,
                        close_time: restaurent.close_time
                    })
                })
        }

    }

    //Changing States
    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    openTimeHandler=(time)=>{
       
        this.setState({
            open_time:time
        })
    }

    closeTimeHandler=(time)=>{
      
        this.setState({
            close_time:time
        })
    }

    //Updating Details
    addRestaurent() {

        let rest_details = {
            rest_id:this.state.rest_id,
            r_name: this.state.r_name,
            address: this.state.address,
            phone: this.state.phone,
            open_time: this.state.open_time,
            close_time: this.state.close_time
        }

        
        const formdata = new FormData();
        formdata.append("restaurent", JSON.stringify(rest_details))

        APIServices.update(this.state.rest_id,formdata)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    alert("Restaurent Updated Successfully")
                }
            }).catch(error => {
                alert("Something Wrong")
                console.log(error)
            })
    }

    //Checking for validations and updating data
    submitform = (e) => {
        let name_pattern = /^[a-zA-Z ]{5,}$/;
        let phone_pat = /^[7-9]{1}[0-9]{9}$/

        if (name_pattern.test(this.state.r_name) && phone_pat.test(this.state.phone)) {
            this.addRestaurent()
        }
        else{
            alert("Name pattern or Phone No. pattern is Wrong")
            console.log(Error)
            
        }

        sessionStorage.removeItem("rest_id");
        this.props.history.push("/admin")
    }

    render() {
        return (
            <div className="container"><LoggedInNav />
                <h4 style={{textAlign:"center"}}>Update Restaurent Details</h4>
                
                    <div className="container pt-2">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={this.submitform}>
                                <div className="mb-3">
                                    <label className="form-lable">Restaurent Name :</label>
                                    <input type="text" required value={this.state.r_name} onChange={(e) => { this.changeHandler(e) }} name="r_name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-lable"> Address :</label>
                                    <textarea type="text" required value={this.state.address} onChange={(e) => { this.changeHandler(e) }} name="address" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-lable">Phone :</label>
                                    <input type="text" required value={this.state.phone} onChange={(e)=>{this.changeHandler(e)}} name="phone" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-lable">Opening Time :</label>
                                    <TimePicker required value={this.state.open_time} onChange={this.openTimeHandler}  className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-lable">Closing Time :</label>
                                    <TimePicker required value={this.state.close_time} onChange={this.closeTimeHandler}  className="form-control"/>
                                </div>

                                <button type="submit" className="form-control btn btn-primary">Update Restaurent</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditRestaurent
