package com.bergbuch3.bergbuch.dao;

import com.bergbuch3.bergbuch.modal.Person;

import java.util.List;

public interface PersonDAO {
	
	List<Person> get();
	
	Person get(int id);
	
	void save(Person person);
	
	void delete(int id);
}
