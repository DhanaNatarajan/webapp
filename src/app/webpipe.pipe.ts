import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'webpipe'
})
export class WebpipePipe implements PipeTransform {

  languageset = {
    TAMIL:{
      HOME:'முகப்பு',
      BODY1:'உடல்1',
      BODY2:'உடல்2',
      BODY3:'உடல்3',
      BODY4:'உடல்4',
      Lang:'தமிழ்'
    },
    ENGLISH:{
      HOME:'home',
      BODY1:'body1',
      BODY2:'body2',
      BODY3:'body3',
      BODY4:'body4',
      Lang:'english'
    }
  }
  transform(value: any, args?: any): any {
    console.log(value);

    let webpipe = localStorage.getItem("language") || 'ENGLISH';
    if(this.languageset[webpipe][value]){
      return this.languageset[webpipe][value];
    }
    return value;
    console.log(value);
  }

}
