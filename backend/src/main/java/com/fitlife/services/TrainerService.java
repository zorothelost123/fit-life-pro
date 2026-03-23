package com.fitlife.services;

import com.fitlife.models.ClientTrainerMapping;
import com.fitlife.models.User;
import com.fitlife.repositories.ClientTrainerMappingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TrainerService {

    private final ClientTrainerMappingRepository mappingRepository;

    public List<User> getAssignedClients(Long trainerId) {
        // Fetch mappings by trainer ID, map to the client object
        return mappingRepository.findByTrainerId(trainerId)
                .stream()
                .map(ClientTrainerMapping::getClient)
                .collect(Collectors.toList());
    }

    public ClientTrainerMapping assignClientToTrainer(User client, User trainer) {
        ClientTrainerMapping mapping = ClientTrainerMapping.builder()
                .client(client)
                .trainer(trainer)
                .build();
        return mappingRepository.save(mapping);
    }
}
