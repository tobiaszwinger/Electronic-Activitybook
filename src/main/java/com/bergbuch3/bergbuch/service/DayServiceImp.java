package com.bergbuch3.bergbuch.service;

import com.bergbuch3.bergbuch.dao.DayDAO;
import com.bergbuch3.bergbuch.modal.Day;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DayServiceImp implements DayService{

    @Autowired
    private DayDAO dayDao;

    @Transactional
    @Override
    public List<Day> get() {
        return dayDao.get();
    }

    @Transactional
    @Override
    public Day get(int id) {
        return dayDao.get(id);
    }

    @Transactional
    @Override
    public void save(Day day) {
        dayDao.save(day);
    }

    @Transactional
    @Override
    public void delete(int id) {
        dayDao.delete(id);
    }

}
