package com.bergbuch3.bergbuch.service;

import com.bergbuch3.bergbuch.modal.Person;

import java.util.List;

public interface PersonService {

	List<Person> get();
	
	Person get(int id);
	
	void save(Person person);
	
	void delete(int id);

}
