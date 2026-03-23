package com.fitlife.repositories;

import com.fitlife.models.ClientTrainerMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClientTrainerMappingRepository extends JpaRepository<ClientTrainerMapping, Long> {
    List<ClientTrainerMapping> findByTrainerId(Long trainerId);
    Optional<ClientTrainerMapping> findByClientId(Long clientId);
}
