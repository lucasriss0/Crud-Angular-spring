import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CoursesRoutingModule } from './courses.routing.module';
import { MatCardModule } from '@angular/material/card';
import {  MatToolbarModule  } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared-module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoursesRoutingModule, MatTableModule,MatCardModule,MatToolbarModule,MatDialogModule,SharedModule,MatButtonModule],
})
export class CoursesModule {}
