import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyService} from "../../../../shared/company.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  private addCompanyForm;
  constructor(private companyService: CompanyService) {
    this.addCompanyForm = new FormGroup({
      companyName: new FormControl(''),
      transportCount: new FormControl('')
    });
  }
  addCompany(data) {
    this.companyService.saveCompany(data).subscribe(
      () => {},
      error => {
        console.log();
      }
    );
  }
  ngOnInit() {
  }

}
