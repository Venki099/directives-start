import { Directive ,Renderer2 ,OnInit,ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
 
@Input() defaultColor:string = 'transparent';
@Input() highLightColor:string = 'orange'
  constructor(private eleref:ElementRef, private renderer:Renderer2) { }
@HostBinding('style.backgroundColor') backgroundColor:string ;
  ngOnInit(){
    this.backgroundColor = this.defaultColor
      // this.renderer.setStyle(this.eleref.nativeElement,'background-color','grey');
  }

  @HostListener('mouseenter') mouseover(eventdata:Event){
    // this.renderer.setStyle(this.eleref.nativeElement,'background-color','grey');
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave(eventdata:Event){
    // this.renderer.setStyle(this.eleref.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor  ;
  }


}
