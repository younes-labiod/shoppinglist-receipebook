import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() selectedComponent = new EventEmitter<string>();

  onSelect(component: string) {
    this.selectedComponent.emit(component);
  }
}
