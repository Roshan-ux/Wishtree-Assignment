package com.zonionsfirst.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.zonionsfirst.model.Restaurent;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.zonionsfirst.model.AdminIdPassword;
import com.zonionsfirst.model.CheckIdPass;
import com.zonionsfirst.service.Services;

@RestController
@CrossOrigin(origins = "*")
public class RestaurentController {
	
	@Autowired
	Services service;
	
	//Adding Data to Database
	@PostMapping("/add")
	public ResponseEntity<String> addRestaurentDetails(@RequestBody Restaurent rest){
		
		System.out.println(rest);
		String msg=null;
		try {
			
			msg = service.addRestaurent(rest);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
			
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	
	//Getting List of Restaurents
	@GetMapping("/getlist")
	public ResponseEntity<List<Restaurent>> getRestaurent(){
		
		List<Restaurent> list =service.getAllRestaurent();
		
		return ResponseEntity.of(Optional.of(list));
	}
	
	//Getting Details of Restaurent
	@GetMapping("/details/{id}")
	public ResponseEntity<Restaurent> details(@PathVariable("id") int rest_id) {
		
		Restaurent restaurent= service.getRestDeatils(rest_id);
		
		return ResponseEntity.of(Optional.of(restaurent));
	}
	
	//Checking for Valid Admin 
	@PostMapping("/login")
	public  ResponseEntity<String> checkAdmin(@RequestBody CheckIdPass idpass){
		
		
		String msg=null;
		try {
			msg = service.checkIdPass(idpass);
			
			return new ResponseEntity<String>(msg,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	
	//Updating Restaurent Details
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateRest(@PathVariable("id") int rest_id,@RequestParam("restaurent") String restaurent){
		
		String msg = service.update(restaurent);
		
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	
	// Delete the Restaurent Details
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteRest(@PathVariable("id") int rest_id){
		String msg=null;
		
		msg =service.delete(rest_id);
		
		return new ResponseEntity<String>(msg,HttpStatus.OK);
	}
	
	
	
	
	
}
