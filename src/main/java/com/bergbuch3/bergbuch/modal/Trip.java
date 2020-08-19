package com.bergbuch3.bergbuch.modal;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity(name = "trip")
@Table(name = "trip")
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column
    private String title;

    @Column
    private String datestart;

    @Column
    private String dateend;

    @Column
    private String descrip;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "trip_has_person",
            joinColumns = @JoinColumn(name = "idtrip"),
            inverseJoinColumns = @JoinColumn(name = "idperson")
    )
    private final Set<Person> persons = new HashSet<Person>();

    @OneToMany(mappedBy="trip_id")
    private Set<Day> days;

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

    public String getDatestart() {
        return datestart;
    }

    public void setDatestart(String datestart) {
        this.datestart = datestart;
    }

    public String getDateend() {
        return dateend;
    }

    public void setDateend(String dateend) {
        this.dateend = dateend;
    }

    public String getDescrip() {
        return descrip;
    }

    public void setDescrip(String descrip) {
        this.descrip = descrip;
    }

    public Set<Day> getDays() {
        return days;
    }

    public void setDays(Set<Day> days) {
        this.days = days;
    }

    public Set<Person> getPersons() {
        return persons;
    }
}
