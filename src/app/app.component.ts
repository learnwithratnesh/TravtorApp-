import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    let lang = localStorage.getItem('lastSelectedLang');
    let setLang;
    if (lang) {
      setLang = lang;
    } else {
      setLang = 'en';
    }
    translate.setDefaultLang(setLang);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/