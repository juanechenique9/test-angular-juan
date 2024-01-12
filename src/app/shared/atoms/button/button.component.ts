import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() id: string = 'button';
  @Input() type: string = 'primary';
  @Input() label: string = 'Continuar'

  @Output() clickEvent: EventEmitter<void> = new EventEmitter();

  click() {
    this.clickEvent.emit();
  }
}
