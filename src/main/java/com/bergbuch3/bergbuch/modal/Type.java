package com.bergbuch3.bergbuch.modal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "type")
@Table(name = "type")
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column
    private String title;

    @OneToMany(mappedBy="type")
    @JsonIgnore
    private Set<Tour> tours;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @JsonIgnore
    public Set<Tour> getTour_id() {
        return tours;
    }

    @JsonProperty
    public void setTour_id(Set<Tour> tour_id) {
        this.tours = tour_id;
    }
}
