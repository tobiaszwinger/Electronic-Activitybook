package com.bergbuch3.bergbuch.modal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity(name = "tour")
@Table(name = "tour")
public class Tour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column
    private String title;

    @Column
    private Float durat;

    @Column
    private Float duratup;

    @Column
    private String starttime;

    @Column
    private String location;

    @Column
    private String descrip;

    @Column
    private Integer peakheight;

    @Column
    private Integer altidiff;

    @Column
    private Integer kilometre;

    @Column
    private String difficulty;

    @Column
    private Integer ropes;

    @ManyToOne
    @JoinColumn(name="day_id", nullable=false)
    @JsonIgnore
    private Day day_id;

    @ManyToOne
    @JoinColumn(name="type_id", nullable=false)
    @JsonIgnore
    private Type type;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Float getDurat() {
        return durat;
    }

    public void setDurat(Float durat) {
        this.durat = durat;
    }

    public Float getDuratup() {
        return duratup;
    }

    public void setDuratup(Float duratup) {
        this.duratup = duratup;
    }

    public String getStarttime() {
        return starttime;
    }

    public void setStarttime(String starttime) {
        this.starttime = starttime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescrip() {
        return descrip;
    }

    public void setDescrip(String descrip) {
        this.descrip = descrip;
    }

    public Integer getPeakheight() {
        return peakheight;
    }

    public void setPeakheight(Integer peakheight) {
        this.peakheight = peakheight;
    }

    public Integer getAltidiff() {
        return altidiff;
    }

    public void setAltidiff(Integer altidiff) {
        this.altidiff = altidiff;
    }

    public Integer getKilometre() {
        return kilometre;
    }

    public void setKilometre(Integer kilometre) {
        this.kilometre = kilometre;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public Integer getRopes() {
        return ropes;
    }

    public void setRopes(Integer ropes) {
        this.ropes = ropes;
    }

    @JsonIgnore
    public Day getDay_id() {
        return day_id;
    }

    @JsonProperty
    public void setDay_id(Day day_id) {
        this.day_id = day_id;
    }

    public Type getType_id() {
        return type;
    }

    @JsonProperty
    public void setType_id(Type tourtype_id) {
        this.type = tourtype_id;
    }

}
