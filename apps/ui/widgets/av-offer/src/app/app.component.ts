import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterOutlet],
  selector: 'av-tarifierung-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'av-offer';
}
