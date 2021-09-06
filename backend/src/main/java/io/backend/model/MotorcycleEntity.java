package io.backend.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "motorcycles")
@Data
public class MotorcycleEntity {

    @Id
    @GeneratedValue
    @Column(name = "motorcycle_id")
    private Long motoID;
}
