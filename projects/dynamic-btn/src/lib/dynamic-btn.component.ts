import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'lib-dynamic-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="'btn btn--' + variant"
      [disabled]="disabled"
      (click)="clicked.emit($event)">
      <ng-content />
    </button>
  `,
  styles: [`
    .btn { padding: 8px 16px; border-radius: 4px; cursor: pointer; }
    .btn--primary { background: #3b82f6; color: white; border: none; }
    .btn--secondary { background: transparent; border: 1px solid #3b82f6; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
  `]
})
export class DynamicBtnComponent {

    @Input() variant: 'primary' | 'secondary' = 'primary';
    @Input() disabled = false;
    @Output() clicked = new EventEmitter<MouseEvent>();
}
