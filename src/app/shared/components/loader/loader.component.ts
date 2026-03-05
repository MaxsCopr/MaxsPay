import { Component, Input } from '@angular/core';

@Component({ selector: 'app-loader', template: '<div class="loader"><mat-spinner [diameter]="diameter"></mat-spinner></div>', styles: ['.loader{display:grid;place-items:center;padding:1rem;}'], standalone: false })
export class LoaderComponent { @Input() diameter = 30; }
