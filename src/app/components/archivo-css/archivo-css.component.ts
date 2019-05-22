import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archivo-css',
  template: `

  <p class="m-5">Holiwis</p>
  `,
  styles: [`
  p {
    color:red;
    font-size: 25px;
  }

  `]
})
export class ArchivoCSSComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
