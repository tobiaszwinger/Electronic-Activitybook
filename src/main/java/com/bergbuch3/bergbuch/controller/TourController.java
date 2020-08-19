package com.bergbuch3.bergbuch.controller;

import com.bergbuch3.bergbuch.dao.TourDAO;
import com.bergbuch3.bergbuch.modal.Tour;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class TourController {

    @Autowired
    private TourDAO tourDAO;

    @GetMapping("/tour")
    public List<Tour> get() {
        return tourDAO.get();
    }

    @PostMapping("/tour")
    public Tour save(@RequestBody Tour tour) {
        tourDAO.save(tour);
        return tour;
    }

    @GetMapping("/tour/{id}")
    public Tour get(@PathVariable int id) {
        return tourDAO.get(id);
    }

    @DeleteMapping("/tour/{id}")
    public String delete(@PathVariable int id) {
        tourDAO.delete(id);
        return "Tour removed with id " + id;
    }

    @PutMapping("/tour")
    public Tour update(@RequestBody Tour tour) {
        tourDAO.save(tour);
        return tour;
    }
}
