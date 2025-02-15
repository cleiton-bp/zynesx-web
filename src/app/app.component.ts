import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAuthComponent } from './pages/components/header-auth/header-auth.component';
import { FooterAuthComponent } from './pages/components/footer-auth/footer-auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderAuthComponent, FooterAuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'zynesx-web';
}
