import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({ selector: 'app-register', templateUrl: './register.component.html', standalone: false })
export class RegisterComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({ name: ['', Validators.required], email: ['', [Validators.required, Validators.email]], password: ['', [Validators.required, Validators.minLength(6)]] });

  constructor(private authService: AuthService) {}
  submit() { if (this.form.valid) this.authService.register(this.form.getRawValue() as any).subscribe(); }
}
