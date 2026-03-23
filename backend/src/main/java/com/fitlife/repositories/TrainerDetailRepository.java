package com.fitlife.repositories;

import com.fitlife.models.TrainerDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TrainerDetailRepository extends JpaRepository<TrainerDetail, Long> {
    Optional<TrainerDetail> findByUserId(Long userId);
}
