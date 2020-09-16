import { Component, OnInit, ViewChild, Renderer2, ElementRef} from '@angular/core';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.css']
})
export class NavarComponent implements OnInit {



  //@ViewChild("myButton") myButton: ElementRef;
  @ViewChild('myButton', {static: false}) myButton: ElementRef;

 
  constructor(private renderer: Renderer2) {

   }

  ngOnInit() {
      this.removeClass();
  }

   public removeClass(){
    console.log("me diste click");
    this.renderer.removeClass(this.myButton.nativeElement, "lg:hidden");
  }

}
