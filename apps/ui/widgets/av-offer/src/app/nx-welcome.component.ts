import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'av-tarifierung-nx-welcome',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    Ich bin der Rahmen<br><br>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
