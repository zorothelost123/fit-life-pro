package com.fitlife.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "client_trainer_mappings")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClientTrainerMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private User client;

    @ManyToOne
    @JoinColumn(name = "trainer_id", nullable = false)
    private User trainer;
}
