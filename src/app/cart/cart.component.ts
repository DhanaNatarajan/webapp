import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { Select2OptionData} from 'ng2-select2';
import { WebserviceService} from '../webservice.service';


declare var jquery:any;
declare let $: any;
import { from } from 'rxjs';
import { text } from '@angular/core/src/render3';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {

  public countrydata:  Array<Select2OptionData>;
  public statedata: Array<Select2OptionData>;

  cartform = new FormGroup({
    cityname: new FormControl(),
    stateselect: new FormControl(),
    countryselect: new FormControl(),
    pincode: new FormControl()
  });
  

  boxcityname;
  boxstatename;
  boxcountryname;
  boxpincode;
  countryselected = 'India';
  stateselected = 'TamilNadu';
  public startValue: string;
  
  constructor(private serv : WebserviceService) { }
  ngOnInit() {
    this.startValue = 'India';
    this.countrydata = this.serv.getcountrylist();
    console.log(this.countrydata);
    this.statedata = this.serv.getstatelist();
  }
  updatecart(){
    debugger;
    this.boxcityname = this.cartform.controls.cityname.value;
    this.boxstatename = this.cartform.controls.stateselect.value;
    this.boxcountryname = this.cartform.controls.countryselect.value;
    this.boxpincode = this.cartform.controls.pincode.value;
    this.serv.addaddress(this.boxcityname,this.boxstatename,this.boxcountryname,this.boxpincode);
    console.log(this.cartform.controls.cityname.value);
  }
  ngAfterViewInit(){
    
  }

  countrychanged(e:any):void{
    let valuec = e.value;
    for(let i=1;i<this.countrydata.length;i++){
      if(valuec === this.countrydata[i].id){
        this.countryselected = this.countrydata[i].text;
        console.log(this.countrydata[i].id);
        break;
      }
      else{
        this.countryselected = this.countrydata[0].text;
        console.log(this.countrydata[i].id);
      }
    }
  }
  statechanged(e:any):void{
    let valuec = e.value;
    for(let i=1;i<this.statedata.length;i++){
      if(valuec === this.statedata[i].id){
        this.stateselected = this.statedata[i].text;
        console.log(this.statedata[i].id);
        break;
      }
      else{
        this.stateselected = this.statedata[0].text;
        console.log(this.statedata[i].id);
      }
    }
  }
}
