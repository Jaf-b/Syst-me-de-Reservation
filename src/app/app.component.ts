import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './ui/shared/footer.component';
import { ToobarComponent } from './ui/shared/toobar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, ToobarComponent],
  template: `
    <app-toobar />
    <router-outlet />
    <app-footer />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ReservationSalleApp';
}
