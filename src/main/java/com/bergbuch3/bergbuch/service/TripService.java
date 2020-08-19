package com.bergbuch3.bergbuch.service;

import com.bergbuch3.bergbuch.modal.Trip;

import java.util.List;

public interface TripService {

    List<Trip> get();

    Trip get(int id);

    void save(Trip trip);

    void delete(int id);
}
