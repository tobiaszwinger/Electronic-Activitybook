package com.bergbuch3.bergbuch.service;


import com.bergbuch3.bergbuch.modal.Day;

import java.util.List;

public interface DayService {

    List<Day> get();

    Day get(int id);

    void save(Day day);

    void delete(int id);

}
