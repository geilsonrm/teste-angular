import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleARoutingModule } from './example-a-routing.module';
import { ExampleAComponent } from './example-a.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    ExampleARoutingModule
  ],
  declarations: [ExampleAComponent, FormComponent, ListComponent]
})
export class ExampleAModule { }

