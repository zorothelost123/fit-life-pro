package com.fitlife.controllers;

import com.fitlife.models.DailyLog;
import com.fitlife.models.User;
import com.fitlife.services.DailyLogService;
import com.fitlife.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clients")
@RequiredArgsConstructor
public class ClientController {

    private final DailyLogService dailyLogService;
    private final UserService userService;

    @PostMapping("/{clientId}/logs")
    public ResponseEntity<DailyLog> submitDailyLog(@PathVariable Long clientId, @RequestBody DailyLog dailyLog) {
        Optional<User> clientOpt = userService.findById(clientId);
        if (clientOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        
        DailyLog savedLog = dailyLogService.submitDailyLog(clientOpt.get(), dailyLog);
        return ResponseEntity.ok(savedLog);
    }

    @GetMapping("/{clientId}/logs")
    public ResponseEntity<List<DailyLog>> getClientLogs(@PathVariable Long clientId) {
        List<DailyLog> logs = dailyLogService.getClientLogs(clientId);
        return ResponseEntity.ok(logs);
    }
}
