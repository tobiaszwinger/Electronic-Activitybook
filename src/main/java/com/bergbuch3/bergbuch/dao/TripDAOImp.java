package com.bergbuch3.bergbuch.dao;

import com.bergbuch3.bergbuch.modal.Trip;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class TripDAOImp implements TripDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Trip> get() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<Trip> query = currSession.createQuery("from trip t order by t.datestart desc", Trip.class);
        List<Trip> list = query.getResultList();
        return list;
    }
    @Override
    public Trip get(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Trip trip = currSession.get(Trip.class, id);
        return trip;
    }

    @Override
    public void save(Trip trip) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(trip);
    }
    @Override
    public void delete(int id) {
        Query query = (Query) entityManager.createQuery("DELETE FROM thp hp WHERE hp.Trip_id = " + id);
        query.executeUpdate();

        query = (Query) entityManager.createQuery("Select d.id from day d where d.trip_id = " + id);
        List dayids = query.list();

        for(int i = 0; i < dayids.size(); i++){
            int idday = (int) dayids.get(i);
            query = (Query) entityManager.createQuery("DELETE FROM mountaint mt WHERE mt.day_id = " + idday);
            query.executeUpdate();
            query = (Query) entityManager.createQuery("DELETE FROM hiket ht WHERE ht.day_id = " + idday);
            query.executeUpdate();
            query = (Query) entityManager.createQuery("DELETE FROM biket bt WHERE bt.day_id = " + idday);
            query.executeUpdate();
            query = (Query) entityManager.createQuery("DELETE FROM mountbiket mbt WHERE mbt.day_id = " + idday);
            query.executeUpdate();
            query = (Query) entityManager.createQuery("DELETE FROM climbt ct WHERE ct.day_id = " + idday);
            query.executeUpdate();
            query = (Query) entityManager.createQuery("DELETE FROM ferratat ft WHERE ft.day_id = " + idday);
            query.executeUpdate();
            query = (Query) entityManager.createQuery("DELETE FROM skit st WHERE st.day_id = " + idday);
            query.executeUpdate();
            query = (Query) entityManager.createQuery("DELETE FROM othert ot WHERE ot.day_id = " + idday);
            query.executeUpdate();
        }

        query = (Query) entityManager.createQuery("DELETE FROM day d WHERE d.trip_id = " + id);
        query.executeUpdate();

        query = (Query) entityManager.createQuery("DELETE FROM trip t WHERE t.id = " + id);
        query.executeUpdate();
    }
}
