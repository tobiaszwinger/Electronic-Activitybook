package com.bergbuch3.bergbuch.dao;

import com.bergbuch3.bergbuch.modal.Type;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class TypeDAOImp implements TypeDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Type> get() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<Type> query = currSession.createQuery("from type", Type.class);
        List<Type> list = query.getResultList();
        return list;
    }

    @Override
    public Type get(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Type type = currSession.get(Type.class, id);
        return type;
    }

    @Override
    public void save(Type type) {
        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(type);
    }

    @Override
    public void delete(int id) {
        Session currSession = entityManager.unwrap(Session.class);
        Type type = currSession.get(Type.class, id);
        currSession.delete(type);
    }
}
