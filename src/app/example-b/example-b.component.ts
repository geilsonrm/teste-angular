import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example-b',
  templateUrl: './example-b.component.html',
  styles: []
})
export class ExampleBComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/exampleB/page', {outlets: { exampleB_form: ['exampleB'] }}]);
  }
  
}
