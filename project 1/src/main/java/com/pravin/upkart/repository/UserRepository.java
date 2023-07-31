package com.pravin.upkart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pravin.upkart.entity.User;

public interface UserRepository extends JpaRepository<User,Integer>{
	
}
