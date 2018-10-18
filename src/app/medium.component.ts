import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'medium',
  templateUrl: './medium.component.html'
})
export class MediumComponent {
  @Input() fromchild: string;
  @Output() childEvent = new EventEmitter<Date>();
  @Output() childSay = new EventEmitter();

  onChildClick() {
    this.childEvent.emit(new Date());
    this.childSay.emit('hello');
  }
}