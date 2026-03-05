import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({ selector: 'app-toast', template: '', standalone: false })
export class ToastComponent {
  private readonly snackBar = inject(MatSnackBar);
  open(message: string) { this.snackBar.open(message, 'Close', { duration: 3000 }); }
}
