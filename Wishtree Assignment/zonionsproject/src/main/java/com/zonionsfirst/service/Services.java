package com.zonionsfirst.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.zonionsfirst.model.AdminIdPassword;
import com.zonionsfirst.model.CheckIdPass;
import com.zonionsfirst.model.Restaurent;

import com.zonionsfirst.repository.RestaurentRepository;

@Service
public class Services {
	
	@Autowired
	private RestaurentRepository repository;
	
	
	//Adding Restaurent
	public String addRestaurent(Restaurent rest){
		
		try {	
		
//		Restaurent restaurent =new ObjectMapper().readValue(rest, Restaurent.class);
		
		repository.save(rest);
		
		return "Added Successfully";
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "Not Added";
	}
	
	//Getting Restaurent
	public List<Restaurent> getAllRestaurent(){
		
		List<Restaurent> list =repository.findAll();
		
		return list;
	}

	//Getting Details
	public Restaurent getRestDeatils(int rest_id) {
		
		Optional<Restaurent> optional = repository.findById(rest_id);
		
		Restaurent restaurent = optional.get();
		
		return restaurent;
	}

	//Verifying Admin Email and Password
	public String checkIdPass(CheckIdPass ip) throws JsonMappingException, JsonProcessingException {
		
		AdminIdPassword ad =new AdminIdPassword();

		
		if(ip.getEmail().equals(ad.getEmailId()) && ip.getPassword().equals(ad.getPassword())) {
			
			return "Match";
		}
		else {
			return "No Match";
		}
		
	}
	
	//Updating Restaurent Details
	public String update(String restaurent) {
		
		try {
		Restaurent rest =new ObjectMapper().readValue(restaurent, Restaurent.class);
		
		Optional<Restaurent> op =repository.findById(rest.getRest_id());
		Restaurent getRest = op.get();
		
		if(getRest.getRest_id()==rest.getRest_id()) {
			
			rest.setImg_path(getRest.getImg_path());
			Restaurent saved =repository.save(rest);
			
			if(saved!=null) {
				return "Updated";
			}
		}
		
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return "Not Updated";
	}
	
	//Deleting Restaurent Details
	public String delete(int rest_id) {
		
		Restaurent restaurent =repository.getOne(rest_id);
		if(restaurent!=null) {
		repository.deleteById(rest_id);
		return "Deleted";
		}
		
		return "Restaurent Not Found";
	}
	
	
	
}
