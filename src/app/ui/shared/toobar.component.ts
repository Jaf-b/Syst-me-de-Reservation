import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-toobar',
  imports: [MatToolbarModule, MatIconModule],
  template: `
    <mat-toolbar>
      <div class="max-width container">
        <span>Kwetu Party</span>
        <span class="spacer"></span>
        <div>
          <span>
            <mat-icon>notifications</mat-icon>
          </span>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: `
  .container{
    display:flex;
    width:100%;
    justify-content:space-between;
  }
    .spacer{
      flex: 1 1 0;
    }
  `,
})
export class ToobarComponent {}
