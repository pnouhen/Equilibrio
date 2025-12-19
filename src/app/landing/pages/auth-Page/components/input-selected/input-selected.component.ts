import { Selected } from './../../services/Selected.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-selected',
  imports: [],
  templateUrl: './input-selected.component.html',
  styleUrl: './input-selected.component.scss',
})
export class InputSelectedComponent {
@Input() dataSelected!: string[];
@Output() inputValueChange = new EventEmitter<string>();

constructor(public selected: Selected) {}

onEmailSelected(newValue: string) {
    this.inputValueChange.emit(newValue);
    this.selected.closeSelected()
  }

  onKeydownSelected(event: KeyboardEvent, newValue: string) {
    if(event.key === "Enter") {
      this.onEmailSelected(newValue)
    }
  }
}
