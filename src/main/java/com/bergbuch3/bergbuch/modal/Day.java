package com.bergbuch3.bergbuch.modal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "day")
@Table(name = "day")
public class Day {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column
    private String date;

    @Column
    private String weather;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="trip_id", nullable=false)
    private Trip trip_id;

    @OneToMany(mappedBy="day_id")
    private Set<Tour> tours;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getWeather() {
        return weather;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    @JsonIgnore
    public Trip getIdtrip() {
        return trip_id;
    }

    @JsonProperty
    public void setIdtrip(Trip idtrip) {
        this.trip_id = idtrip;
    }

    public Set<Tour> getTours() {
        return tours;
    }

    public void setTours(Set<Tour> tours) {
        this.tours = tours;
    }
}
