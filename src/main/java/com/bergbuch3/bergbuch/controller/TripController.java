package com.bergbuch3.bergbuch.controller;

import com.bergbuch3.bergbuch.modal.Trip;
import com.bergbuch3.bergbuch.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class TripController {

    @Autowired
    private TripService tripService;

    @GetMapping("/trip")
    public List<Trip> get() {
        return tripService.get();
    }

    @PostMapping("/trip")
    public Trip save(@RequestBody Trip trip) {
        tripService.save(trip);
        return trip;
    }

    @GetMapping("/trip/{id}")
    public Trip get(@PathVariable int id) {
        return tripService.get(id);
    }

    @DeleteMapping("/trip/{id}")
    public String delete(@PathVariable int id) {
        tripService.delete(id);
        return "Trip removed with id " + id;
    }

    @PutMapping("/trip")
    public Trip update(@RequestBody Trip trip) {
        tripService.save(trip);
        return trip;
    }
}