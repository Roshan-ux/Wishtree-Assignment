package com.zonionsfirst.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


//Entity Class for Storing Restaurent Details
@Entity
@Table(name="restaurent_details")
public class Restaurent {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int rest_id;
	private String r_name;
	private String address;
	private String phone;
	private String open_time;
	private String close_time;
	@Column(name="image_path",columnDefinition = "LONGTEXT")
	private String img_path;
	
	@Column(name="Updated_date")
	private String date;
	
	
	//Initializing Date
	public Restaurent() {
		super();
		LocalDate ld =LocalDate.now();
		date=ld.toString();
	}
	public Restaurent(String r_name, String address, String phone, String open_time, String close_time,String img_path, String date) {
		super();
		this.r_name = r_name;
		this.address = address;
		this.phone = phone;
		this.open_time = open_time;
		this.close_time = close_time;
		this.img_path=img_path;
		this.date = date;
	}
	public int getRest_id() {
		return rest_id;
	}
	public void setRest_id(int rest_id) {
		this.rest_id = rest_id;
	}
	public String getR_name() {
		return r_name;
	}
	public void setR_name(String r_name) {
		this.r_name = r_name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getOpen_time() {
		return open_time;
	}
	public void setOpen_time(String open_time) {
		this.open_time = open_time;
	}
	public String getClose_time() {
		return close_time;
	}
	public void setClose_time(String close_time) {
		this.close_time = close_time;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
	
	public String getImg_path() {
		return img_path;
	}
	public void setImg_path(String img_path) {
		this.img_path = img_path;
	}
	@Override
	public String toString() {
		return "Restaurent [rest_id=" + rest_id + ", r_name=" + r_name + ", address=" + address + ", phone=" + phone
				+ ", open_time=" + open_time + ", close_time=" + close_time + ", date=" + date + "]";
	}
	
	
	
}
