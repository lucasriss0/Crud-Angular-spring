import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialog } from './components/error-dialog/error-dialog';

@NgModule({
  declarations: [],
  imports: [CommonModule,ErrorDialog],
  exports: [ErrorDialog]
})
export class SharedModule {}
