import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() selected = new EventEmitter<string>();

  onSelect(selected: string) {
    this.selected.emit(selected);
  }

}
