package com.movie.model;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Movie  implements Serializable{
	 @Id
	 private Integer id;
		private String poster_path;
		private String title;
		private String overview;
		private Float vote_average;

	    public Movie() {
	    	
	    }
	    
 public Movie(Integer id, String title, String overview, Float vote_average , String poster_path) {
	        this.id = id;
	        this.title = title;
	        this.overview = overview;
	        this.vote_average = vote_average;
	        this.poster_path = poster_path;
	    }

public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

public String getPoster_path() {
	return poster_path;
}

public void setPoster_path(String poster_path) {
	this.poster_path = poster_path;
}

public String getTitle() {
	return title;
}

public void setTitle(String title) {
	this.title = title;
}

public String getOverview() {
	return overview;
}

public void setOverview(String overview) {
	this.overview = overview;
}

public Float getVote_average() {
	return vote_average;
}

public void setVote_average(Float vote_average) {
	this.vote_average = vote_average;
}


 
}
