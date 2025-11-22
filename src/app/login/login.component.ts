import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

 onLogin() {
  this.auth.login(this.email, this.password).subscribe((res: any) => {
    if (res.length > 0) {
      // ✅ Save user info (keeps user logged in)
      localStorage.setItem('user', JSON.stringify(res[0]));

    
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  });
}
}
