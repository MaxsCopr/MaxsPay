import { Component, Input } from '@angular/core';

@Component({ selector: 'app-form-input', templateUrl: './form-input.component.html', standalone: false })
export class FormInputComponent { @Input() label = ''; @Input() type = 'text'; @Input() controlName = ''; }
