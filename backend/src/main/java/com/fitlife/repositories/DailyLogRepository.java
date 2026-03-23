package com.fitlife.repositories;

import com.fitlife.models.DailyLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface DailyLogRepository extends JpaRepository<DailyLog, Long> {
    List<DailyLog> findByClientId(Long clientId);
    Optional<DailyLog> findByClientIdAndDate(Long clientId, LocalDate date);
}
