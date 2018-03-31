package com.movie.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.movie.model.Movie;
import com.register.RegForm;

public interface RegFormRepository extends MongoRepository<RegForm, String> {
      public RegForm findOneByEmail(String email);
      public RegForm findOneByPass(String pass);
}
