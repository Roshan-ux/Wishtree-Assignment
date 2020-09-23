import axios from 'axios';


class APIServices {


    //To Add data
    addRestaurent(data){
        return axios.post("http://localhost:8080/add",data);
    }

    //Getting Restaurent list
    getRestaurents(){
        return axios.get("http://localhost:8080/getlist");
    }

    //Getting Restaurent Details
    getRestaurentDetails(id){
        return axios.get("http://localhost:8080/details/"+id);
    }

    //Updating Details
    update(id,data){
        return axios.put(`http://localhost:8080/update/${id}`,data)
    }

    //Deleting Details
    delete(id){
        return axios.delete(`http://localhost:8080/delete/${id}`)
    }

    //Login Admin 
    checkLogin(IdPass){
        return axios.post("http://localhost:8080/login",IdPass);
    }
    
}

export default new APIServices();