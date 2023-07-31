package com.pravin.upkart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pravin.upkart.entity.User;
import com.pravin.upkart.repository.UserRepository;

@Service
public class UserService {
	@Autowired
    private UserRepository rep;
    public String createUser(User user) {
    	List<User> list=rep.findAll();
    	for(User u: list) {
    		if(user.getEmail().equals(u.getEmail())) {
    			return "Email is already exists";
    		}
    		if(user.getMobilenumber().equals(u.getMobilenumber())) {
    			return "Mobile Number is already exixts";
    		}
    	}
        rep.save(user);
        return "Registered Successfully";
    }
    
}
