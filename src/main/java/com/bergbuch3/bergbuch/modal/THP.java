package com.bergbuch3.bergbuch.modal;

import javax.persistence.*;
import java.io.Serializable;

@IdClass(THP.class)
@Entity(name = "thp")
@Table(name = "trip_has_person")
public class THP implements Serializable {

    @Id
    @Column(name = "idtrip", nullable=false)
    private Integer trip_id;

    @Id
    @Column(name = "idperson", nullable=false)
    private Integer person_id;

    public Integer getIdtrip() {
        return trip_id;
    }

    public void setIdtrip(Integer idtrip) {
        this.trip_id = idtrip;
    }

    public Integer getIdperson() {
        return person_id;
    }

    public void setIdperson(Integer idperson) {
        this.person_id = idperson;
    }
}
