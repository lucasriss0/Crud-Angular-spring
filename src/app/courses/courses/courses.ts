import { CoursesService } from './../services/courses';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCard } from "@angular/material/card";
import { MatToolbar } from "@angular/material/toolbar";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatCard, MatToolbar],
  templateUrl: './courses.html',
  styleUrls: ['./courses.scss'],
})
export class CoursesComponent {
  courses: Observable<Course[]>;
  displayedColumns = ['name','category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService){

    //this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
  }
}
