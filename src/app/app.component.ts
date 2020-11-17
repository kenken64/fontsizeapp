import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  firstname: string = "Kenneth";
  names = ['Ken', 'Kelvin', 'Alex'];
  isOk: boolean = false;
  isDisabled: boolean = false;
  childFontSize: number;

  onSubmit(){
    console.log("Click !");
  }

  sizeChanged($event){
    console.log('done!');
    console.log($event);
    this.childFontSize = $event;
  }
}
