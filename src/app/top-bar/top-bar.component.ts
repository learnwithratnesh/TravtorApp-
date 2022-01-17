import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  selectedLang: any
  constructor(private translate: TranslateService) {

  }
  updateLang(lang: any) {
    this.selectedLang = lang.target.value;
    localStorage.setItem("lastSelectedLang", this.selectedLang);
    this.translate.use(this.selectedLang);
  }

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/