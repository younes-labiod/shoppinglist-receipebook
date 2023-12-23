import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shoplist-recbook';

  componentName: string = 'recipe';

  onNavigate(componentName: string) {
    this.componentName = componentName;
  }
}
