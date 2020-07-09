import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selected: string = 'recipes';

  onSelected(selected: string) {
    console.log(selected);
    this.selected = selected;
  }
}
