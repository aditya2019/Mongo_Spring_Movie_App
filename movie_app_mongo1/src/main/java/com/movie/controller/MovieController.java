package com.movie.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
	    
	    @RequestMapping(value = "/movies", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Void> create(@RequestBody Movie movie) {
			 try {
				 movieRepository.save(movie);
			  return ResponseEntity.noContent().build();
			 } catch (Exception e) {
			  return ResponseEntity.status(HttpStatus.CONFLICT).build();
			 }
			}
	    

		@RequestMapping(value = "/updateMovie", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Void> updateExist(@RequestBody Movie movie)  {
			 try {
			  movieRepository.save(movie);
			  return ResponseEntity.noContent().build();
			 } catch (Exception e) {
			  return ResponseEntity.notFound().build();
			 }
			}
	    
	    @RequestMapping(value="/{id}",method=RequestMethod.DELETE,consumes = MediaType.APPLICATION_JSON_VALUE)
	    public  ResponseEntity<Void> delete(@PathVariable Integer id){
	      try {
	    	movieRepository.deleteById(id);
	     return ResponseEntity.noContent().build();
	      }
	      catch (Exception e) {
	    	  return ResponseEntity.notFound().build();
	    	 }
	    }
	}

