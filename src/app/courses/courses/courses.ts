import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.scss'],
})
export class CoursesComponent {
  courses: Course[] = [];
  displayedColumns = ['name','category'];
}
