import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Output() searchQuery = new EventEmitter<string>();

  searchText: string = '';

  onSearch() {
    if (this.searchText.trim()) {
    this.searchQuery.emit(this.searchText);
    }
  }
//live search
  onInputChange(value: string): void {
    if (value.trim()){
      this.searchQuery.emit(value);
    }
  }
}