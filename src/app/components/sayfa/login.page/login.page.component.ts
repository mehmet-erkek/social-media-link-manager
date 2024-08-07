import { Component } from '@angular/core';
import { LoginFormComponent } from '../../molecules/login-form/login-form.component';
import { LoginTemplateComponent } from '../../sablon/login-template/login-template.component';
@Component({
  selector: 'app-login.page',
  standalone: true,
  imports: [LoginFormComponent,LoginTemplateComponent],
  templateUrl: './login.page.component.html',
  styleUrl: './login.page.component.css'
})
export class LoginPageComponent {

}
