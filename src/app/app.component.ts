import { Component } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-root',
  template: `
    <button type="button" (click)="changeDataProperties()">
      Outside Toggle Component - Change Data Properties (will not change Toggle view)
    </button>
    <button type="button" (click)="changeDataObject()">
      Outside Toggle Component - Change Data Object (will change Toggle view)
    </button>
    <toggle [data]="data"></toggle>`
})
export class AppComponent {
  data = new Data("MyToggle", true);
  
  changeDataProperties(): void {
    this.data.label = "NewPropertiesParent";
    this.data.value = !this.data.value;
  }
  
  changeDataObject(): void {
    this.data = new Data("NewDataParent", !this.data.value);
  }
}