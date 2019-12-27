import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {Transport} from "../../../../entity/transport";
import {LocaleStorageService} from "../../../../shared/locale-storage.service";
import {CompanyService} from "../../../../shared/company.service";
import {TransportService} from "../../../../shared/transport.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material";
import {Hotel} from "../../../../entity/hotel";
import {HotelService} from "../../../../shared/hotel.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  private hotels: Hotel[];
  private displayedColumns: string[] = ['id', 'hotelName', 'country','address',
                                          'rating', 'phoneNumber', 'delete'];
  private dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private companyService: CompanyService,
              private hotelService: HotelService,
              private localeStorageService: LocaleStorageService) {

  }

  showAll() {
    if (this.hotels == undefined) {
      const hotels = JSON.parse(localStorage.getItem('hotels'));
      if(hotels != undefined) {
        this.hotels = hotels;
      } else {
        this.hotelService.getAllHotels().subscribe(
          (hotel: any) => {
            this.hotels = hotel;
            localStorage.setItem('hotels', JSON.stringify(hotel));

            this.dataSource = new MatTableDataSource<Hotel>(this.hotels);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          },
          error1 => {
            console.log(error1);
          }
        )
      }
    } else{
      this.dataSource = new MatTableDataSource<Hotel>(this.hotels);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }



  delete(hotelId: number) {
    this.hotelService.deleteById(hotelId).subscribe(
      () => {
        this.hotels = this.hotels.filter(hotel => {
          return hotel.hotelId !== hotelId;
        });

        this.dataSource = new MatTableDataSource<Hotel>(this.hotels);
        this.localeStorageService.update('hotels', this.hotels);
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  ngOnInit() {
  }

}
