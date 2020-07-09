import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() toAdd: EventEmitter<Ingredient> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    if (this.amountInputRef.nativeElement.value > 0) {
      this.toAdd.emit(new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value));
    }
  }

}
