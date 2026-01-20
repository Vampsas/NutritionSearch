import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@Component({
  selector: 'app-root',
  imports: [SearchBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  handleSearch(query: string): void {
    console.log('Search query received in AppComponent:', query);
    // Implement search logic here, e.g., filter a list or make an API call
  }
}
