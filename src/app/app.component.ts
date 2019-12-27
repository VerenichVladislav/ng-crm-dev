import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  constructor(translate: TranslateService,
              private spinnerService: Ng4LoadingSpinnerService) {

    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.spinnerService.hide();
  }
}
