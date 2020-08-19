package com.bergbuch3.bergbuch.dao;


import com.bergbuch3.bergbuch.modal.Type;

import java.util.List;

public interface TypeDAO {
    List<Type> get();

    Type get(int id);

    void save(Type tour);

    void delete(int id);
}
