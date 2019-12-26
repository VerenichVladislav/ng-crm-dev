import {Component, OnInit, ViewChild} from '@angular/core';
import {map} from "rxjs/operators";
import {CompanyService} from "../../../../shared/company.service";
import {Transport} from "../../../../entity/transport";
import {FormControl, FormGroup} from "@angular/forms";
import {Company} from "../../../../entity/company";
import {TransportService} from "../../../../shared/transport.service";
import {Observable} from "rxjs/index";
import {LocaleStorageService} from "../../../../shared/locale-storage.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from "@angular/material";

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.css']
})
export class TransportsComponent implements OnInit {

  private addTransportForm;

  private transports: Transport[];
  private companies: Company[];

  private addCompanyBtn: boolean = false;
  private companySelect: boolean = false;

  private displayedColumns: string[] = ['id', 'name', 'passengers','delete'];
  private dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private companyService: CompanyService,
              private transportService: TransportService,
              private localeStorageService: LocaleStorageService) {
    this.addTransportForm = new FormGroup({
      name: new FormControl(''),
      passengerCapacity: new FormControl(''),
      company: new FormControl('')
    });
  }

  addTransport(data) {
    console.log(data);

    this.transportService.saveTransport(data).subscribe(
      (transport) => {
        this.companySelect = true;

        this.transports.push(new Transport(transport));
        this.localeStorageService.update('transports', this.transports);
        this.dataSource.data = this.transports;
      },
      error => {
        console.log();
      }
    );


  }

  loadCompanies() {
    if(this.companies == undefined) {
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

  showAll() {
    this.addCompanyBtn = false;
    this.companySelect = false;

    if (this.transports == undefined) {
      const transports = JSON.parse(localStorage.getItem('transports'));
      if(transports != undefined) {
        this.transports = transports;
      } else {
        this.transportService.getAllTransport().subscribe(
          (transp: any) => {
            this.transports = transp;
            localStorage.setItem('transports', JSON.stringify(transp));

            this.dataSource = new MatTableDataSource<Transport>(this.transports);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          },
          error1 => {
            console.log(error1);
          }
        )
      }
    }
    this.dataSource = new MatTableDataSource<Transport>(this.transports);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(transportId: number) {
    this.transportService.deleteById(transportId).subscribe(
      () => {
        this.transports = this.transports.filter(transp => {
          return transp.transportId !== transportId;
        });
        this.dataSource = new MatTableDataSource<Transport>(this.transports);
        this.localeStorageService.update('transports', this.transports);
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  ngOnInit() {

  }
}
