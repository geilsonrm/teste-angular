import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  styles: []
})
export class ExampleAComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.navigate(['/exampleA/page', {outlets: { exampleA_form: ['exampleA'] }}]);
    // this.router.navigate(['../exampleA/a']);
    console.log(this.router)
    this.router.navigate(['/exampleA/page', { outlets: { exampleA_list: 'exampleA' } }]);

  }

}
