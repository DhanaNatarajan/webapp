import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private http : HttpClient) { }
  
  statedata;
  singlepageid
  countrydata

  productdata;

  testdata
  private testupdate =new Subject<any[]>();
  
  getcountrylist(){
    this.countrydata = [
      {id:'1', text:'India'},{id:'2',text:'china'},{id:'3',text:'japan'},{id:'4',text:'USA'},{id:'5',text:'UK'}
    ];
    // this.http.get<{message: string,posts :Post[]}>('http://localhost:7000/api/post').subscribe((postdata) =>{
    //   this.posts = postdata.posts;
    // });

    return this.countrydata;
  }
  testgetcountrylist(){
    
    this.http.get<{message: string,posts :any[]}>('http://localhost:6300/api/post').subscribe((postdata)=>{
      this.testdata = postdata.posts;
      this.testupdate.next([...this.testdata]);
    });
  }

  testupdatedcountry(){
    return this.testupdate.asObservable();
  }
  
  getstatelist(){
    this.statedata = [
      {id:'1',text:'tamilnadu'},{id:'2',text:'kerala'},{id:'3',text:'andhra'},{id:'4',text:'karnataka'}
    ];
    return this.statedata;
  }
  getproductlist(){
    this.productdata = [
      {"id":"1","category":"1","subcategory":"1","brand":"1","name":"turmeric","description":"Turmeric Powder has a soft, earthy and woody aroma, which is one of the most used spices while preparing Indian dishes. It adds a natural and vibrant colour to food, while also effectively purifying blood and stimulating protein digestion. bb Royal Turmeric is made using organically grown turmeric, which is also known to possess antiseptic properties.","grams":"1000","litres":"56","image":"1.jpg","price":"350","quantity":"7","discount":"10","tamount":"315","damount":"35"},{"id":"2","category":"1","subcategory":"1","brand":"1","name":"salt","description":"Turmeric Powder has a soft, earthy and woody aroma, which is one of the most used spices while preparing Indian dishes. It adds a natural and vibrant colour to food, while also effectively purifying blood and stimulating protein digestion. ","grams":"1000","litres":"56","image":"2.jpg","price":"200","quantity":"47","discount":"10","tamount":"180","damount":"20"},{"id":"3","category":"1","subcategory":"1","brand":"1","name":"rice","description":"Turmeric Powder has a soft, earthy and woody aroma, which is one of the most use","grams":"","litres":"77","image":"3.jpg","price":"250","quantity":"47","discount":"10","tamount":"225","damount":"25"},{"id":"4","category":"1","subcategory":"1","brand":"1","name":"sugar","description":"Turmeric Powder has a soft, earthy and woody aroma, which is one of the most use","grams":"1","litres":"","image":"4.jpg","price":"150","quantity":"50","discount":"10","tamount":"135","damount":"15"},{"id":"5","category":"1","subcategory":"1","brand":"1","name":"nuts","description":"Turmeric Powder has a soft, earthy and woody aroma, which is one of the most use","grams":"200","litres":"0","image":"5.jpg","price":"220","quantity":"50","discount":"25","tamount":"165","damount":"55"},{"id":"6","category":"1","subcategory":"1","brand":"1","name":"tesing","description":"Turmeric Powder has a soft, earthy and woody aroma, which is one of the most use","grams":"0","litres":"6","image":"7.jpg","price":"120","quantity":"500","discount":"10","tamount":"108","damount":"12"}
    ];
    return this.productdata;
  }

  addaddress(city,state,country,pin){
    const post = {city: city, state:state,country: country,pin:pin};
    this.http.post<{message: string}>('http://localhost:6300/api/post', post).subscribe((responsedata) =>{
      console.log(responsedata.message);
    })
  }
}
