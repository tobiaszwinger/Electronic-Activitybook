package com.bergbuch3.bergbuch.dao;

import com.bergbuch3.bergbuch.modal.Tour;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class TourDAOImp implements TourDAO{
    
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Tour> get() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<Tour> query = currSession.createQuery("from tour", Tour.class);
        List<Tour> list = query.getResultList();
        return list;
    }

    @Override
    public Tour get(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Tour tour = currSession.get(Tour.class, id);
        return tour;
    }

    @Override
    public void save(Tour tour) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(tour);
    }

    @Override
    public void delete(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Tour tour = currSession.get(Tour.class, id);
        currSession.delete(tour);
    }
}
