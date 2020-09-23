package com.zonionsfirst.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.zonionsfirst.model.Restaurent;

//JPA/Hibernate Repository to interact with Database

@Repository
public interface RestaurentRepository extends JpaRepository<Restaurent, Integer>{


}
