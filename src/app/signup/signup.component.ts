
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']

})
export class SignupComponent {
    user = {username:'', email: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

 onSignup() {
    this.auth.signup(this.user).subscribe({
      next: () => {
        
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert('Signup failed');
      }
    });
  }
}
