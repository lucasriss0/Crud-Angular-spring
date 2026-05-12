package com.Lucas.crudspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import main.java.com.Lucas.crudspring.Model.Course;

@SpringBootApplication

public class CrudspringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudspringApplication.class, args);
	}

	@Bean
	CommandLineRunner iniDataBase(CourseRepository courseRepository){
	return args -> {
		courseRepository.deleteAll();
		Course c = new Course();
		c.setName("Spring");
		c.Category("front");
		courseRepository.save(new c());
	};
	}
}
