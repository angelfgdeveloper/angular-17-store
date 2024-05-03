import { Directive, ElementRef, inject } from '@angular/core';

// ng g d domains/shared/directives/highlight

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  element = inject(ElementRef);

  constructor() { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}
