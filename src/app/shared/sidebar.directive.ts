import { Directive, HostListener } from '@angular/core';

/**
 * Closing the sidebar if click outside or link inside if open
 */
@Directive({
  selector: '.app-body',
})
export class SidebarOutsideCloseDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  shouldClose($event: any) {
    if(document.body.classList.contains('sidebar-mobile-show')) {
      if(!document.getElementById("main-sidebar").contains($event.target) || $event.target.classList.contains("nav-link")) {
        document.body.classList.remove('sidebar-mobile-show');
      }
    }
  }
}

/**
* Allows the sidebar to be toggled via click.
*/
@Directive({
  selector: '.sidebar-toggler',
})
export class SidebarToggleDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('sidebar-hidden');
  }
}

@Directive({
  selector: '.mobile-sidebar-toggler',
})
export class MobileSidebarToggleDirective {
  constructor() { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('sidebar-mobile-show');
  }
}

/**
* Allows the off-canvas sidebar to be closed via click.
*/
@Directive({
  selector: '.sidebar-close',
})
export class SidebarOffCanvasCloseDirective {
  constructor() { }

  // Check if element has class
  private hasClass(target: any, elementClassName: string) {
    return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
  }

  // Toggle element class
  private toggleClass(elem: any, elementClassName: string) {
    let newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
    if (this.hasClass(elem, elementClassName)) {
      while (newClass.indexOf(' ' + elementClassName + ' ') >= 0 ) {
        newClass = newClass.replace( ' ' + elementClassName + ' ' , ' ' );
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
      elem.className += ' ' + elementClassName;
    }
  }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();

    if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
      this.toggleClass(document.querySelector('body'), 'sidebar-opened');
    }
  }
}

export const SIDEBAR_TOGGLE_DIRECTIVES = [SidebarOutsideCloseDirective, SidebarToggleDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective];
