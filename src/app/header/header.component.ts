import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  tamilshow : boolean = true;
  englishshow : boolean = false;
  ngOnInit() {

    let langtest = localStorage.getItem("language") || 'ENGLISH';
    console.log(langtest);
    if(langtest === "TAMIL"){
      this.tamilshow = true;
      this.englishshow = false;
    }
    else{
      this.englishshow = true;
      this.tamilshow = false;
    }
  }
  languagechange(language : string){

    console.log(language);
    localStorage.setItem("language", language);
    window.location.reload();
  }
}
