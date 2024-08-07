import { Component } from '@angular/core';
import { LoginFormComponent } from '../../molecules/login-form/login-form.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login-template',
  standalone: true,
  imports: [LoginFormComponent,MatCardModule],
  templateUrl: './login-template.component.html',
  styleUrl: './login-template.component.css'
})
export class LoginTemplateComponent {

}
