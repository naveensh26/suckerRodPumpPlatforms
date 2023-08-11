import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { RestApiService } from 'src/app/api/restApi.service';

@Component({
  selector: 'app-wells',
  templateUrl: './wells.page.html',
  styleUrls: ['./wells.page.scss'],
})
export class WellsPage implements OnInit {
  titleData: any = 'Well List';
  data: any = [];
  CurrenPageTitle: string = 'Wells';
  datetime = 'assets/svg/datetime.svg';
  displayElement_1 = false;
  displayElement_2 = false;
  displayElement_3 = false;
  
  displayElement_4 = false;
  
  constructor(private router: Router, private httpService: RestApiService) {}

  ngOnInit() {
    // this.httpService.callGet().subscribe(
    //   (response) => {
    //     this.data = response;
    //     console.log('well list response data --------', response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    this.generateItems();
  }
  navigateTo(item: any) {
    console.log(' wells page---', item);
    this.router.navigateByUrl('/wells/well-detail', {
      state: item,
    });
  }
  getColorStatus(index: any) {
    if (index === 0) {
      this.displayElement_1 =true;
      return '#eb445a';
    } else if (index === 1) {
      
      this.displayElement_2 =true;
      return '#135d54';
    } else if (index === 2) {
      
      this.displayElement_3 =true;
      return '#e0a41c';
    } else {
      
      this.displayElement_4 =true;
      return '#eb445a';
    }
  }

  private generateItems() {
    for (let i = 0; i < 15; i++) {
      let obj = {
        well_name: 'Well Name 001',
        desc: 'Description will be seen here. Description will be seen here.',
        status: 'Status1',
        time: '2023:04:12 07:33:56 AM',
      };
      this.data.push(obj);
    }
  }
  onIonInfinite(event: any) {
    this.generateItems();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
