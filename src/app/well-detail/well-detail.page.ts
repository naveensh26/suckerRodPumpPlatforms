import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-well-detail',
  templateUrl: './well-detail.page.html',
  styleUrls: ['./well-detail.page.scss'],
})
export class WellDetailPage implements OnInit {
  state = [];
  constructor(private router: Router) {}

  ngOnInit() {
    this.state = history.state;
    // console.log("well detailpage --",this.router.getCurrentNavigation().extras.state);
    console.log('WellDetailPage --', this.state);
  }
}
