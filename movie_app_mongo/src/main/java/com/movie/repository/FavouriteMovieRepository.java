package com.movie.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.movie.model.Movie;

public interface FavouriteMovieRepository extends MongoRepository<Movie, Integer> {
}


	
