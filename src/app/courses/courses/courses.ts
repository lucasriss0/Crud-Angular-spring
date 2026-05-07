import { CoursesService } from './../services/courses';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCard } from "@angular/material/card";
import { MatToolbar } from "@angular/material/toolbar";
import { catchError, Observable, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialog } from '../../shared/components/error-dialog/error-dialog';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatCard, MatToolbar,MatProgressSpinnerModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.scss'],
})
export class CoursesComponent {
  courses$: Observable<Course[]>;
  displayedColumns = ['name','category'];

  //coursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog:MatDialog
  ){

    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list().pipe(
      catchError(error =>{
        this.onError('ERRO ao Carregar Cursos. ');
        return of([])
      })
    );
  }
    onError(errorMsg:string){
    this.dialog.open(ErrorDialog,{
      data:{
        errorMsg
      }
    });

  }

}
