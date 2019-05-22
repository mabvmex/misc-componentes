import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

    <p [style.fontSize.px]="tamano">
      Hola mundo. Esta es una etiqueta HTML!
    </p>

<button class="btn btn-primary" (click)="tamano = tamano + 5">
<i class="fa fa-plus"></i>
</button>
&nbsp;
<button class="btn btn-primary" (click)="tamano = tamano - 5">
<i class="fa fa-minus"></i>
</button>
&nbsp;
<label> {{tamano}} </label>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 60;

  constructor() { }

  ngOnInit() {
  }

}
