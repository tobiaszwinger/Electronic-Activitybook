package com.bergbuch3.bergbuch.dao;

import com.bergbuch3.bergbuch.modal.Trip;

import java.util.List;

public interface TripDAO {

    List<Trip> get();

    Trip get(int id);

    void save(Trip trip);

    void delete(int id);
}
