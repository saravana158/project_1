package com.pravin.upkart.controller;
import com.pravin.upkart.entity.User;
import com.pravin.upkart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class UserController {
	@Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/post")
    public String create (@RequestBody User user) {
        return userService.createUser(user);
        
    }
}