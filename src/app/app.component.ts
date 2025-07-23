import { Component } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leo-minimal-clone';
  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
    });
  }
}
