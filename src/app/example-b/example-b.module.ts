import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleBRoutingModule } from './example-b-routing.module';
import { ExampleBComponent } from './example-b.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    ExampleBRoutingModule
  ],
  declarations: [ExampleBComponent, FormComponent]
})
export class ExampleBModule { }
