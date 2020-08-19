package com.bergbuch3.bergbuch.controller;

import com.bergbuch3.bergbuch.modal.Person;
import com.bergbuch3.bergbuch.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class PersonController {

	@Autowired
	private PersonService personService;

	@GetMapping("/persons")
	public List<Person> get() {
		return personService.get();
	}

	@PostMapping("/persons")
	public Person save(@RequestBody Person person) {
		personService.save(person);
		return person;
	}

	@GetMapping("/persons/{id}")
	public Person get(@PathVariable int id) {
		return personService.get(id);
	}

	@DeleteMapping("/persons/{id}")
	public String delete(@PathVariable int id) {
		personService.delete(id);
		return "Person removed with id " + id;
	}

	@PutMapping("/persons")
	public Person update(@RequestBody Person person) {
		personService.save(person);
		return person;
	}
}