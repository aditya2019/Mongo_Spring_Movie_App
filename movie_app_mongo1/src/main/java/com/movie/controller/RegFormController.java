package com.movie.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	@Autowired
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
    
    
    
    @RequestMapping(value = "/data", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, String>> login(@RequestBody RegForm regform) {
    Map<String, String> response = new HashMap<String, String>();
    String email = String.valueOf(regform.getEmail());
    String password = String.valueOf(regform.getPass());

  if ((regformRepository.findOneByEmail(email) != null) && (regformRepository.findOneByPass(password) != null))
    {
    response.put("ok", "Logedin Succesfuly");
    return ResponseEntity.accepted().body(response);
   
    } else 
    {
    	if ((regformRepository.findOneByEmail(email) != null))
    	{
    response.put("error", " !Opss     -WRONG PASSWORD");
    return ResponseEntity.badRequest().body(response);
    	}
    	else if((regformRepository.findOneByPass(password) != null))
    	{response.put("error", " !Opss    -WRONG EMAIL");
        return ResponseEntity.badRequest().body(response);
    	}else
    	{
    		response.put("error", " !Opss    -Both Email AND Password Wrong");
            return ResponseEntity.badRequest().body(response);
    	}
  }
 }
}
