import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation.component';

const routes: Routes = [
  {path: '', component: NavigationComponent, children: [
    {path: 'exampleA', loadChildren: 'app/example-a/example-a.module#ExampleAModule'},
    {path: 'exampleB', loadChildren: 'app/example-b/example-b.module#ExampleBModule'},
    {path: 'exampleC', loadChildren: 'app/example-c/example-c.module#ExampleCModule'},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}


