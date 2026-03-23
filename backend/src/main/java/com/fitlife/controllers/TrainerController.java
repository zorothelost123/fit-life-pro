package com.fitlife.controllers;

import com.fitlife.models.User;
import com.fitlife.services.TrainerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trainers")
@RequiredArgsConstructor
public class TrainerController {

    private final TrainerService trainerService;

    @GetMapping("/{trainerId}/clients")
    public ResponseEntity<List<User>> getAssignedClients(@PathVariable Long trainerId) {
        List<User> clients = trainerService.getAssignedClients(trainerId);
        return ResponseEntity.ok(clients);
    }
}
