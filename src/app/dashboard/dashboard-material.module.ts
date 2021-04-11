import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  exports: [
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
  ],
  imports: []
})
export class DashboardMaterialModule { }
