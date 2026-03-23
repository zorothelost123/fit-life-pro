package com.fitlife.services;

import com.fitlife.models.DailyLog;
import com.fitlife.models.User;
import com.fitlife.repositories.DailyLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DailyLogService {

    private final DailyLogRepository dailyLogRepository;

    public DailyLog submitDailyLog(User client, DailyLog newLog) {
        newLog.setClient(client);
        if (newLog.getDate() == null) {
            newLog.setDate(LocalDate.now());
        }
        
        Optional<DailyLog> existingLog = dailyLogRepository.findByClientIdAndDate(client.getId(), newLog.getDate());
        if (existingLog.isPresent()) {
            DailyLog logToUpdate = existingLog.get();
            logToUpdate.setWorkoutNotes(newLog.getWorkoutNotes());
            logToUpdate.setDietNotes(newLog.getDietNotes());
            if (newLog.getPhotoUrl() != null) {
                logToUpdate.setPhotoUrl(newLog.getPhotoUrl());
            }
            return dailyLogRepository.save(logToUpdate);
        }

        return dailyLogRepository.save(newLog);
    }

    public List<DailyLog> getClientLogs(Long clientId) {
        return dailyLogRepository.findByClientId(clientId);
    }
}
