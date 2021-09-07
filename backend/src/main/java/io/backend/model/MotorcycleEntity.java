package io.backend.model;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "motorcycle_table")
public class MotorcycleEntity {

    @Id
    @GeneratedValue
    @Column(name = "moto_id")
    private Long motoID;

    @Column(name = "moto_nickname")
    private String motoNickName;

    @Column(name = "manufacturer")
    private String manufacturer;

    @Column(name = "model")
    private String model;

    @Column(name = "construction_year")
    private String constructionYear;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MotorcycleEntity that = (MotorcycleEntity) o;
        return Objects.equals(motoID, that.motoID) && Objects.equals(motoNickName, that.motoNickName) && Objects.equals(manufacturer, that.manufacturer) && Objects.equals(model, that.model) && Objects.equals(constructionYear, that.constructionYear);
    }

    @Override
    public int hashCode() {
        return Objects.hash(motoID, motoNickName, manufacturer, model, constructionYear);
    }
}
