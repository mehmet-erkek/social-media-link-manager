import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ButtonComponent, InputComponent, FormsModule, ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  loginButtonText: string = 'Giriş Yap'

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    // Authservice ve Guard ile yönlendirme
    if (this.authService.login(this.username, this.password)) {
       this.router.navigate(['/social-media-manager']);
    } else {
      alert('Kullanıcı adı veya şifre yanlış!');
    }
  }
}
