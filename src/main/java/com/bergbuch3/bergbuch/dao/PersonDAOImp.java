package com.bergbuch3.bergbuch.dao;

import com.bergbuch3.bergbuch.modal.Person;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class PersonDAOImp implements PersonDAO {
	@Autowired
	private EntityManager entityManager;
	@Override
	public List<Person> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<Person> query = currSession.createQuery("from person", Person.class);
		List<Person> list = query.getResultList();
		return list;
	}
	@Override
	public Person get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Person pers = currSession.get(Person.class, id);
		return pers;
	}
	@Override
	public void save(Person person) {

		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(person);
	}
	@Override
	public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Person pers = currSession.get(Person.class, id);
		currSession.delete(pers);
	}
}