import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
styles: ['button { width: 100%; height: 100%; font-size: 5em; font-family: Helvetica, Sans-Serif !important; }']
})
export class SquareComponent  {

  @Input() value: 'X' | 'O';

}