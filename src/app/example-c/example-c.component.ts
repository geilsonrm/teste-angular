import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example-c',
  templateUrl: './example-c.component.html',
  styles: []
})
export class ExampleCComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/exampleC/page', {outlets: { exampleC_form: ['exampleC'] }}]);
  }
  
}
