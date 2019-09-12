import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleCComponent } from './example-c.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page',
    pathMatch: 'full'
  },

  {
    path: 'page',
    component: ExampleCComponent,
    children: [{ path: 'exampleC', component: FormComponent, outlet: 'exampleC_form' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleCRoutingModule {}
