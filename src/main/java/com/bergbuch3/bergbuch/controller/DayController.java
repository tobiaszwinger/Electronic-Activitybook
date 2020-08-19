package com.bergbuch3.bergbuch.controller;

import com.bergbuch3.bergbuch.modal.Day;
import com.bergbuch3.bergbuch.service.DayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DayController {

    @Autowired
    private DayService dayService;

    @GetMapping("/day")
    public List<Day> get() {
        return dayService.get();
    }

    @PostMapping("/day")
    public Day save(@RequestBody Day day) {
        dayService.save(day);
        return day;
    }

    @GetMapping("/day/{id}")
    public Day get(@PathVariable int id) {
        return dayService.get(id);
    }

    @DeleteMapping("/day/{id}")
    public String delete(@PathVariable int id) {
        dayService.delete(id);
        return "Day removed with id " + id;
    }

    @PutMapping("/day")
    public Day update(@RequestBody Day day) {
        dayService.save(day);
        return day;
    }
}
