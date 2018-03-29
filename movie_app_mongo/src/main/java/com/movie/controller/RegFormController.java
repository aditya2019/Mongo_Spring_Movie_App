package com.movie.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.movie.model.Movie;
import com.movie.repository.FavouriteMovieRepository;
import com.movie.repository.RegFormRepository;
import com.register.RegForm;


@RestController
@RequestMapping("/usersend")
public class RegFormController {
	
	private RegFormRepository regformRepository;

    public RegFormController(RegFormRepository regformRepository) {
        this.regformRepository = regformRepository;
    }
	
	
    @RequestMapping(value = "/Userdata", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> create(@RequestBody RegForm regform) {
		 try {
			 regformRepository.save(regform);
		  return ResponseEntity.noContent().build();
		 } catch (Exception e) {
		  return ResponseEntity.status(HttpStatus.CONFLICT).build();
		 }
		}
	
}
