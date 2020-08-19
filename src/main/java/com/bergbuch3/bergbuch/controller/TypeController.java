package com.bergbuch3.bergbuch.controller;

import com.bergbuch3.bergbuch.dao.TypeDAO;
import com.bergbuch3.bergbuch.modal.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class TypeController {

    @Autowired
    private TypeDAO typeDAO;

    @GetMapping("/type")
    public List<Type> get() {
        return typeDAO.get();
    }

    @PostMapping("/type")
    public Type save(@RequestBody Type type) {
        typeDAO.save(type);
        return type;
    }

    @GetMapping("/type/{id}")
    public Type get(@PathVariable int id) {
        return typeDAO.get(id);
    }

    @DeleteMapping("/type/{id}")
    public String delete(@PathVariable int id) {
        typeDAO.delete(id);
        return "Type removed with id " + id;
    }

    @PutMapping("/type")
    public Type update(@RequestBody Type type) {
        typeDAO.save(type);
        return type;
    }
}
