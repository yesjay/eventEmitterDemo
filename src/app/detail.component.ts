import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  @Input() parentValue: string;
  @Output() childEvent = new EventEmitter<Date>();
  @Output() childSay = new EventEmitter();

  onChildClick() {
    this.childEvent.emit(new Date());
    this.childSay.emit('hello');
  }

}