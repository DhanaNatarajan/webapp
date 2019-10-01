import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  carouseldata = [
    {id:1,images:'slide1.jpg',heading:'Welcome to Our Online Store',subheading:'GROCERY STORE',para:'FOR TRUE GOURMETS',click:1,whitecolor:true},
    {id:1,images:'slide2.jpg',heading:'A Wide Selection of Artisan Bread',subheading:'BAKED GOODS',para:'AVAILABLE AT OUR STORE',click:2,whitecolor:false},
    {id:1,images:'slide3.jpg',heading:'Fresh and Tasty',subheading:'VEGETABLES',para:'THAT YOU LOVE',click:3,whitecolor:true}
]

  SlideOptions = { items: 1, dots: false, nav: false };  
  CarouselOptions = { items: 3, dots: true, nav: true }; 

  ngOnInit() {

    setInterval(function(){ 
      var dates = new Date();
      var hour = dates.getHours();
      var minute = dates.getMinutes();
      var second = dates.getSeconds();

      $('.hours').text(23 - hour);
      $('.minutes').text(59 - minute);
      $('.seconds').text(59 - second);
    }, 1000);


  }


}
