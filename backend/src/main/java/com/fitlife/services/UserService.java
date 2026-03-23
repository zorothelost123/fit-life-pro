package com.fitlife.services;

import com.fitlife.models.Role;
import com.fitlife.models.User;
import com.fitlife.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User registerUser(User user) {
        // Logic for registration (in a real app, hash the password here)
        if (user.getRole() == null) {
            user.setRole(Role.CLIENT); // Default role
        }
        return userRepository.save(user);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
}
