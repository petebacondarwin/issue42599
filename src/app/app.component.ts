import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'issue42599';
}

const localizedString = $localize`This string should be translated`;

const x = 1 as any;

console.log(localizedString, x);