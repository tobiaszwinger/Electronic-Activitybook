package com.bergbuch3.bergbuch.dao;


import com.bergbuch3.bergbuch.modal.Day;

import java.util.List;

public interface DayDAO {

    List<Day> get();

    Day get(int id);

    void save(Day day);

    void delete(int id);
}
