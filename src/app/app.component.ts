import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
// import { StompService } from 'ng2-stomp-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // private wsConf = {
  //   host: 'test.com',
  //   queue: ''
  // };

  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'ru'])
    translate.setDefaultLang('en');
    translate.use('en');

    // stomp.configure(this.wsConf);
    //
    // stomp.startConnect().then(() => {
    //   console.log('connected');
    // });
  }
}
