package com.movie.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.movie.model.Movie;
import com.movie.repository.FavouriteMovieRepository;

  
 //@CrossOrigin(origins = "http://localhost:4200")
	@RestController
	@RequestMapping("/favmovie")
	public class MovieController {

	    private FavouriteMovieRepository movieRepository;

	    public MovieController(FavouriteMovieRepository movieRepository) {
	        this.movieRepository = movieRepository;
	    }

	    @GetMapping("/all")
	    public List<Movie> getAll() {
	        return movieRepository.findAll();
	    }
	    
	    @RequestMapping(value="/movies",method=RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
	    public  void addMovie(@RequestBody Movie movie){
	     movieRepository.save(movie);
	    	
	    }
	    @RequestMapping(value="/{id}",method=RequestMethod.DELETE,consumes = MediaType.APPLICATION_JSON_VALUE)
	    public  void delete(@PathVariable Integer id){
	     movieRepository.deleteById(id);
	    	
	    }
	}

