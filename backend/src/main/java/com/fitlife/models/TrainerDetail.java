package com.fitlife.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "trainer_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TrainerDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    private String specialization;

    @Column(columnDefinition = "TEXT")
    private String bio;
}
