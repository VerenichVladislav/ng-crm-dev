import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyService} from "../../../../shared/company.service";
import {Transport} from "../../../../entity/transport";
import {map} from "rxjs/operators";
import {TransportService} from "../../../../shared/transport.service";
import { Observable } from 'rxjs';
import {Company} from "../../../../entity/company";
import {LocaleStorageService} from "../../../../shared/locale-storage.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  private addCompanyForm;
  private addTransport;

  private transports: Transport[];
  private companies: Company[];

  private addTransportBtn: boolean = false;
  private transportSelect: boolean = false;

  @ViewChild("edit", {static: false}) input1ElementRef;
  private editField: boolean = false;

  constructor(private companyService: CompanyService,
              private transportService: TransportService,
              private localeStorageService: LocaleStorageService) {
    this.addCompanyForm = new FormGroup({
      companyName: new FormControl(''),
      transportCount: new FormControl('')
    });

    this.addTransport = new FormControl();
  }

  addCompany(data) {
    this.companyService.saveCompany(data).subscribe(
      (company: Company) => {
        this.addTransportBtn = true;
        this.transportSelect = true;

        this.companies.push(new Company(company));
        this.localeStorageService.update('companies', this.companies);

        if(this.transports === null) {
          this.loadTransport().subscribe(
            transports => {
              this.transports = transports;
            },
            error1 => {
              console.log(error1);
            }
          );
        }

      },
      error => {
        console.log();
      }
    );


  }

  loadTransport(): Observable<Transport[]> {
    return this.transportService.getAllTransport().pipe(
      map((transport: any) => {
          return transport;
        }
      )
    );
  }

  showAll() {
    this.addTransportBtn = false;
    this.transportSelect = false;

    if (this.companies == undefined) {
      const companies = JSON.parse(localStorage.getItem('companies'));
      if(companies != undefined) {
        this.companies = companies;
      } else {
        this.companyService.getAllCompanies().subscribe(
          (comp: Company[]) => {
            this.companies = comp;
            localStorage.setItem('companies', JSON.stringify(comp));
          },
          error1 => {
            console.log(error1);
          }
        )
      }
    }
  }

  showEdit() {
    this.editField = true;
  }

  save() {
    console.log('Отправить');
    this.editField = false;
  }

  delete(companyName: string) {
    this.companyService.deleteByName(companyName).subscribe(
      () => {
        this.companies = this.companies.filter(comp => {
          return comp.companyName !== companyName;
        });

        this.localeStorageService.update('companies', this.companies);
      },
      error1 => {
        console.log(error1);
      }
    );
  }


  ngOnInit() {
  }

}
