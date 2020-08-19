package com.bergbuch3.bergbuch.dao;

import com.bergbuch3.bergbuch.modal.THP;

import java.util.List;

public interface THPDAO {

    List<THP> get();

    THP get(int id);

    void save(THP thp);

    void delete(int id);
}
