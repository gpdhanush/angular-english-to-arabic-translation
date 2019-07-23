import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  bntStyle: string;
  lang: string;
  arabicButton: any;
  englishButton: any;
  constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
        this.englishButton = true;
    }
  useLanguage(lang) {
    this.translate.use(lang);
    if (lang === 'ar') {
      this.bntStyle = 'example-full-width';
      this.arabicButton = true;
      this.englishButton = false;
    } else {
      this.bntStyle ='';
      this.arabicButton = false;
      this.englishButton = true;
    }
  }
}
