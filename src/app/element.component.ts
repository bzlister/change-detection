import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'element',
  styles: ['div {border: 1px solid black}'],
  template: `
    <div>
      <span>{{ label }} {{ value }}</span>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent {
  @Input() label: string;
  @Input() value: boolean;
}