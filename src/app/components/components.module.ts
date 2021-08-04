import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncreasingComponent } from './increasing/increasing.component';
import { DoughnutComponent } from './doughnut/doughnut.component';



@NgModule({
  declarations: [
    IncreasingComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IncreasingComponent,
    DoughnutComponent
  ]
})
export class ComponentsModule { }
