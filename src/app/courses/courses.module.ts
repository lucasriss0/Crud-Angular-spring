import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CoursesRoutingModule } from './courses.routing.module';
import {MatCardModule} from '@angular/material/card';
import {  MatToolbarModule  } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoursesRoutingModule, MatTableModule,MatCardModule,MatToolbarModule],
})
export class CoursesModule {}
