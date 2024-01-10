import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText : string = ""

  @Output()
  changeSearchText : EventEmitter<string> = new EventEmitter<string>();


  @ViewChild('searchInput') searchInputEl : ElementRef;



  onChangeSearchText(){
    this.changeSearchText.emit(this.searchText);
  }
  updateSearchText(inputEl : HTMLInputElement){
    this.searchText = inputEl.value;
    this.changeSearchText.emit(this.searchText);
  }
  updateSearchText2(){
    this.searchText =  this.searchInputEl.nativeElement.value;
    this.changeSearchText.emit(this.searchText);
  }
}
