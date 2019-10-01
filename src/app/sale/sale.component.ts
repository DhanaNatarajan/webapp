import { Component, OnInit } from '@angular/core';
import { WebserviceService} from '../webservice.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor(private serv: WebserviceService) { }
  posttest;
  ngOnInit() {
    this.serv.testgetcountrylist()
    this.posttest = this.serv.testupdatedcountry().subscribe((post: any[]) => {
      this.posttest = post;
      console.log(this.posttest);
    });
  }

}
