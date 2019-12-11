import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalRootURL } from 'src/app/GlobalRootURL';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succesful-replenishing',
  templateUrl: './succesful-replenishing.component.html',
  styleUrls: ['./succesful-replenishing.component.css']
})
export class SuccesfulReplenishingComponent implements OnInit {
  message: any;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    const confirmCache = this.route.snapshot.paramMap.get('confirmCache');
    this.http.get<any>(GlobalRootURL.BASE_API_URL + 'wallets/' + userId + '/confirm/' + confirmCache).subscribe(
      (log: HttpErrorResponse) => {
        this.message = log;
        console.log(this.message);
       }
     );
     this.router.navigateByUrl('/profile');
  }
}
