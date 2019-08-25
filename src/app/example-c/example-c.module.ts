import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleCRoutingModule } from './example-c-routing.module';
import { ExampleCComponent } from './example-c.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    ExampleCRoutingModule
  ],
  declarations: [ExampleCComponent, FormComponent]
})
export class ExampleCModule { }
