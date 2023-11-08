import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  _id?: string;
  name?: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = {
    email: '',
    password: '',
  };
  constructor(private http: HttpClient, private router: Router) {}
  onSubmit(): void {
    if (!this.user.email || !this.user.password) return;
    const self = this;
    this.http.post('http://localhost:8080/api/user/login', this.user).subscribe({
      next(res: any) {
        console.log(res);
        localStorage.setItem('token', res.token);
        self.router.navigate(['/']);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
