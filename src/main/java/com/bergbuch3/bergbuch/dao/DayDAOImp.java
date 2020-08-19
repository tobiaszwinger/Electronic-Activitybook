package com.bergbuch3.bergbuch.dao;

import com.bergbuch3.bergbuch.modal.Day;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class DayDAOImp implements DayDAO{
    @Autowired
    private EntityManager entityManager;
    @Override
    public List<Day> get() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<Day> query = currSession.createQuery("from day d order by d.date", Day.class);
        List<Day> list = query.getResultList();
        return list;
    }
    @Override
    public Day get(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Day day = currSession.get(Day.class, id);
        return day;
    }
    @Override
    public void save(Day day) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(day);
    }
    @Override
    public void delete(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Day day = currSession.get(Day.class, id);
        currSession.delete(day);
    }
}
