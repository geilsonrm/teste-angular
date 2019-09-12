import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleBComponent } from './example-b.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page',
    pathMatch: 'full'
  },

  {
    path: 'page',
    component: ExampleBComponent,
    children: [{ path: 'exampleB', component: FormComponent, outlet: 'exampleB_form' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleBRoutingModule {}
