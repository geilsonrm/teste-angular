import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleAComponent } from './example-a.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'page',
  //   pathMatch: 'full'
  // },

  {
    path: 'page',
    component: ExampleAComponent,
    children: [
      { path: '', component: FormComponent },
      { path: 'exampleA', component: FormComponent, outlet: 'exampleA_form' },
      { path: 'exampleA', component: ListComponent, outlet: 'exampleA_list' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleARoutingModule {}

