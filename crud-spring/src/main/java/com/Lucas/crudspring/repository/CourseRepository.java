package com.Lucas.crudspring.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype. Repository;
import main.java.com.Lucas.crudspring.Model.Course;

@repository

public class CourseRepository extends JpaRepository<Course,Long>{
    
}
