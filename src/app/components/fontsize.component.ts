import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fontsize',
  templateUrl: './fontsize.component.html',
  styleUrls: ['./fontsize.component.css']
})
export class FontsizeComponent implements OnInit {
  
  @Input() message: string;
  @Output() onFontSize = new EventEmitter<number>();
  fontSize: string = '2em';
  constructor() { }

  ngOnInit(): void {
  }

  fontSizeChanged($event){
    console.log('fontSizeChanged');
    console.log($event.target.value);
    const fontSizeVal = parseInt($event.target.value);
    this.fontSize = `${fontSizeVal}em`;
    this.onFontSize.next(fontSizeVal);
  }
}
