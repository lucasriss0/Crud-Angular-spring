import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CoursesRoutingModule } from './courses.routing.module';
import { MatCardModule } from '@angular/material/card';
import {  MatToolbarModule  } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared-module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoursesRoutingModule, MatTableModule,MatCardModule,MatToolbarModule,MatDialogModule,SharedModule,MatButtonModule,MatIconModule],
})
export class CoursesModule {}
