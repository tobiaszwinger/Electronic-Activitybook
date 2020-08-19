package com.bergbuch3.bergbuch.dao;

import com.bergbuch3.bergbuch.modal.Tour;

import java.util.List;

public interface TourDAO {

    List<Tour> get();

    Tour get(int id);

    void save(Tour tour);

    void delete(int id);
}
