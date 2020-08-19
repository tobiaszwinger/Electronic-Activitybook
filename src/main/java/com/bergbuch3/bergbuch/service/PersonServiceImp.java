package com.bergbuch3.bergbuch.service;

import com.bergbuch3.bergbuch.dao.PersonDAO;
import com.bergbuch3.bergbuch.modal.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PersonServiceImp implements PersonService {
	
	@Autowired
	private PersonDAO personDao;

	@Transactional
	@Override
	public List<Person> get() {
		return personDao.get();
	}

	@Transactional
	@Override
	public Person get(int id) {
		return personDao.get(id);
	}

	@Transactional
	@Override
	public void save(Person person) {
		personDao.save(person);
	}

	@Transactional
	@Override
	public void delete(int id) {
		personDao.delete(id);
	}

}
