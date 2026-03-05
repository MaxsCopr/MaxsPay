import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({ selector: 'app-login', templateUrl: './login.component.html', standalone: false })
export class LoginComponent {
  private fb = inject(FormBuilder);
  loading = false;
  form = this.fb.group({ email: ['', [Validators.required, Validators.email]], password: ['', Validators.required] });

  constructor(private authService: AuthService, private router: Router) {}

  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    const { email, password } = this.form.getRawValue();
    this.authService.login(email!, password!).subscribe({ next: () => this.router.navigate(['/dashboard']), error: () => (this.loading = false), complete: () => (this.loading = false) });
  }
}
