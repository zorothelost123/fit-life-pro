package com.fitlife.controllers;

import com.fitlife.models.User;
import com.fitlife.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        User registeredUser = userService.registerUser(user);
        return ResponseEntity.ok(registeredUser);
    }
    
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        // Implement security / JWT login here
        return ResponseEntity.ok("Login successful (Placeholder)");
    }
}
