import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
// import { StompService } from 'ng2-stomp-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  // private wsConf = {
  //   host: 'test.com',
  //   queue: ''
  // };

  constructor(translate: TranslateService,
              private spinnerService: Ng4LoadingSpinnerService) {

    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    translate.use('en');

    // stomp.configure(this.wsConf);
    //
    // stomp.startConnect().then(() => {
    //   console.log('connected');
    // });
  }

  ngOnInit() {
    this.spinnerService.hide();
  }
}
