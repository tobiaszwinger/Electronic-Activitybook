package com.bergbuch3.bergbuch.dao;

import com.bergbuch3.bergbuch.modal.THP;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class THPDAOImp implements THPDAO {
    
    @Autowired
    private EntityManager entityManager;
    @Override
    public List<THP> get() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<THP> query = currSession.createQuery("from thp", THP.class);
        List<THP> list = query.getResultList();
        return list;
    }
    @Override
    public THP get(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        THP thp = currSession.get(THP.class, id);
        return thp;
    }

    @Override
    @Transactional
    public void save(THP thp) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(thp);

        /*
        //Pfuusch!!
        String querystring = "INSERT into trip_has_person (Trip_id, Person_id) " +
                "values (" + thp.getTrip_id() + ", " + thp.getPerson_id() + ")";

        Query query = (Query) entityManager.createNativeQuery(querystring);
        query.executeUpdate();
        */
    }
    @Override
    public void delete(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        THP thp = currSession.get(THP.class, id);
        currSession.delete(thp);
    }
}
