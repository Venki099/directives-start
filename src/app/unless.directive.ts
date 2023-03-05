import { Directive,Input,TemplateRef ,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
 @Input() set appUnless(condition :boolean){
  if(!condition){
    this.viewcontref.createEmbeddedView(this.templateref)
  }else{
    this.viewcontref.clear();
  }
 }
  constructor(private templateref:TemplateRef<any>,private viewcontref:ViewContainerRef) { }

}
