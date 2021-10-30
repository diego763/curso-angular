import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputTextToLowerCase]'
})
export class InputTextToLowerCaseDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('window:keyup', ['$event'])
  keyUp($event: any) {
    // console.log('key.up', $event.key, $event.target.value, $event.target.value.toLowerCase());
    this.elementRef.nativeElement.value = $event.target.value.toLowerCase();
  }

}
