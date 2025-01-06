import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-footer',
  imports: [MatCardModule],
  template: `
    <mat-card appearance="outlined">
      <mat-card-content class="max-width">
        <div>
          <h3>Salles</h3>
          <a>jafred</a>
          <a>jafred</a>
          <a>jafred</a>
        </div>
        <div>
          <h3>Liens</h3>
          <a href="https://drcmind-malakisi.teachable.com/">malakisi</a>
          <a href="https://github.com/Jaf-b/Syst-me-de-Reservation">github</a>
        </div>
        <div>
          <span>
            <b>Kwetu Party © {{ date.getFullYear() }}</b> <br />
            Développé par Jafred Bukulu, Propulsé par Malakisi</span
          >
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: `
  mat-card{
    border-radius: 0px;
  }
  mat-card-content{
    display:flex;
    width:100%;
    justify-content:space-between;
    div{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
  }
  `,
})
export class FooterComponent {
  date = new Date();
}
