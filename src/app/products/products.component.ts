import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebserviceService} from '../webservice.service'
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  private prodsubs : Subscription;

  constructor(private serv : WebserviceService) { }

  productarray = [];

  ngOnInit() {
    let count = 0;
    const prodobser =  Observable.create(observer =>{
      setInterval(()=>{
        observer.next(count);
        count++;
      }, 1000);
    })
    this.prodsubs = prodobser.subscribe(data =>{
      console.log(data);
    })
    this.productarray = this.serv.getproductlist();
    console.log(this.productarray);
  }
  ngOnDestroy(){
    this.prodsubs.unsubscribe();
  }
  
}
