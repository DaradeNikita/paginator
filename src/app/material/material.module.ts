import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

let matArray = [
  MatCardModule,
  MatPaginatorModule,
  MatButtonModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matArray
  ],

  exports : [
    ...matArray
  ]
})
export class MaterialModule { }
