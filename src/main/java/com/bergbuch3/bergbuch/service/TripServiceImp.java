package com.bergbuch3.bergbuch.service;

import com.bergbuch3.bergbuch.dao.TripDAO;
import com.bergbuch3.bergbuch.modal.Trip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TripServiceImp implements TripService {

    @Autowired
    private TripDAO tripDao;

    @Transactional
    @Override
    public List<Trip> get() {
        return tripDao.get();
    }

    @Transactional
    @Override
    public Trip get(int id) {
        return tripDao.get(id);
    }

    @Transactional
    @Override
    public void save(Trip trip) {
        tripDao.save(trip);
    }

    @Transactional
    @Override
    public void delete(int id) {
        tripDao.delete(id);
    }
}
