package com.zonionsfirst.model;

//Pojo Class to get Email and Password Temporary
public class CheckIdPass {

	private String email;
	private String password;
	
	public CheckIdPass() {
		
	}
	
	public CheckIdPass(String email, String password) {
		
		this.email = email;
		this.password = password;
	}

	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "CheckIdPass [email=" + email + ", password=" + password + "]";
	}
	
	
	
}
