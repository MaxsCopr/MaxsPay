import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({ selector: 'app-forgot-password', templateUrl: './forgot-password.component.html', standalone: false })
export class ForgotPasswordComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({ email: ['', [Validators.required, Validators.email]] });

  constructor(private authService: AuthService) {}
  submit() { if (this.form.valid) this.authService.forgotPassword(this.form.value.email!).subscribe(); }
}
