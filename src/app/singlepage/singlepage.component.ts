import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebserviceService } from '../webservice.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent implements OnInit {

  pageid;
  singleitem;
  constructor( private route : ActivatedRoute, private serv : WebserviceService) { }

  ngOnInit() {
    this.pageid = this.route.snapshot.params['id'];
    this.showsinglepage(this.pageid);
    // let tempsing = this.serv.getsinglepage;
    // console.log(this.serv.productdata)
  }

  showsinglepage(id: number){
    let temparr = this.serv.getproductlist();
    for(let i=0;i<temparr.length;i++){
      if(id == temparr[i].id){
        this.singleitem = temparr[i];
        break;
      }
      else{
        console.log("no" +'temparr[i]');
      }
    }
  }
}
