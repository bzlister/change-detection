import { Component, Input, AfterContentInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'toggle',
  styles: ['div {border: 1px solid black}'],
  template: `
    <div>
      <element [label]="data.label" [value]="data.value"></element>
      <button type="button" (click)="changeDataProperties()">
        Inside Toggle Component - Change Data Properties (will change view)
      </button>
      <button type="button" (click)="changeDataObject()">
        Inside Toggle Component - Change Data Object (will change view)
      </button>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent implements AfterContentInit {

  @Input() data: Data;
  
  constructor() { console.clear() }
  
  ngAfterContentInit() {
  }
  
  changeDataProperties(): void {
    this.data.label = "NewPropertiesSelf";
    this.data.value = !this.data.value;
  }

  changeDataObject(): void {
    this.data = new Data("NewDataSelf", !this.data.value);
  }
}