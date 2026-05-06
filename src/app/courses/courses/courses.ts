import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCard } from "@angular/material/card";
import { MatToolbar } from "@angular/material/toolbar";


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatCard, MatToolbar],
  templateUrl: './courses.html',
  styleUrls: ['./courses.scss'],
})
export class CoursesComponent {
  courses: Course[] = [
    {  _id: "1",name:'angular',category:'front-end'}


  ];
  displayedColumns = ['name','category'];
}
