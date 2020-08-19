package com.bergbuch3.bergbuch.controller;

import com.bergbuch3.bergbuch.dao.THPDAO;
import com.bergbuch3.bergbuch.modal.THP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class THPController {
    @Autowired
    private THPDAO thpDAO;

    @GetMapping("/thp")
    public List<THP> get() {
        return thpDAO.get();
    }

    @PostMapping("/thp")
    public THP save(@RequestBody THP thp) {
        thpDAO.save(thp);
        return thp;
    }

    @GetMapping("/thp/{id}")
    public THP get(@PathVariable int id) {
        return thpDAO.get(id);
    }

    @DeleteMapping("/thp/{id}")
    public String delete(@PathVariable int id) {
        thpDAO.delete(id);
        return "THP removed with id " + id;
    }

    @PutMapping("/thp")
    public THP update(@RequestBody THP thp) {
        thpDAO.save(thp);
        return thp;
    }
}
