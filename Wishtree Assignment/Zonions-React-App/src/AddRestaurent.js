import React, { Component } from 'react'
import APIServices from './APIServices';
import TimePicker from 'react-time-picker';
import LoggedInNav from './Navbars/LoggedInNav';


class AddRestaurent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             r_name:'',
             address:'',
             phone:'',
             open_time:'',
             close_time:'',
             menu_img:''
        }
    }

    //Selecting Image
    selectImage(e){
        this.handleFile(e)
    }

    //Changeing State
    changeHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    //Changeing State
    openTimeHandler=(time)=>{
       
        this.setState({
            open_time:time
        })
    }

    //Changeing State
    closeTimeHandler=(time)=>{
      
        this.setState({
            close_time:time
        })
    }

    //To Read image
    handleFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                console.log(e.target.result)
                this.setState({
                    menu_img: e.target.result
                })
            };
            reader.readAsDataURL(event.target.files[0])
        }

    }

    addRestaurent(e){

        // this.handleFile(e)
        //Storing All Info in Object
        let rest_details={
            r_name:this.state.r_name,
            address:this.state.address,
            phone:this.state.phone,
            open_time:this.state.open_time,
            close_time:this.state.close_time,
            img_path:this.state.menu_img
        }

        //Adding Details of Restaurent
        APIServices.addRestaurent(rest_details)
        .then(res =>{
            if(res.status===200)
            {
                alert("Restaurent Added Successfully")
            }
        }).catch(error =>{
            alert("Something Wrong")
            console.log(error)
        })
    }

    submitform=(e)=>{
        let name_pattern=/^[a-zA-Z ]{5,}$/;
        let phone_pat=/^[7-9]{1}[0-9]{9}$/

        //Checking if Patterns is Correct Or Not
        if(name_pattern.test(this.state.r_name) && phone_pat.test(this.state.phone)){
            //Calling Method Implemented Above
            this.addRestaurent(e)
        }
        else{
            alert("Name Pattern or phone pattern is Wrong")
        }
        
        sessionStorage.removeItem("rest_id");

        //Redirecting to Admin Page
        this.props.history.push("/add_restaurent")
    }
    render() {
        return (
            <div className="container"><LoggedInNav />
                <h4 style={{textAlign:"center"}}>Fill Restaurent Details</h4>
                
                    <div className="container pt-2">
                        <div className="row">
                            <div className="col-md-6 col-10 mx-auto">

                            {/* Submitting Form */}
                                <form onSubmit={this.submitform}>
                                    <div className="mb-3">
                                        <label className="form-lable">Restaurent Name :</label>
                                        <input type="text" required value={this.state.r_name} onChange={(e)=>{this.changeHandler(e)}} name="r_name" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-lable"> Address :</label>
                                        <textarea type="text" required value={this.state.address} onChange={(e)=>{this.changeHandler(e)}} name="address" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-lable">Phone :</label>
                                        <input type="text" required value={this.state.phone} onChange={(e)=>{this.changeHandler(e)}} name="phone" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-lable">Opening Time :</label>
                                        {/* <input type="text" required value={this.state.open_time} onChange={(e)=>{this.changeHandler(e)}} name="open_time" className="form-control" /> */}
                                        <TimePicker required value={this.state.open_time} onChange={this.openTimeHandler}  className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-lable">Closing Time :</label>
                                        <TimePicker amPmAriaLabel="selectAM/PM" required value={this.state.close_time} onChange={this.closeTimeHandler} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-lable">Menu Image :</label>
                                        <input type="file" accept="image/jpg,image/png" required  onChange={(e)=>{this.selectImage(e)}} name="menu_img" className="form-control" />
                                    </div>
                                    <button type="submit" className="form-control btn btn-primary">Add Restaurent</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default AddRestaurent
