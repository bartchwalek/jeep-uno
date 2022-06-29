import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  animations: [
    trigger('toggle', [
      state('open', style({
        right: '0px',
        opacity: 1
      })),
      state('closed', style({
        right: '-450px',
        opacity: 0.5
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.25s')
      ])
    ])
  ]
})
export class MenuComponent implements OnInit, AfterViewInit {

  private mC: ElementRef;

  @ViewChild('menuContainer') set menuContainer(mc: ElementRef) {
    if (mc) {
      this.mC = mc;
      this.updateDimensions();
    }
  }

  get menuContainer(): ElementRef {
    return this.mC;
  }

  constructor() {
  }

  private wW: number = 0;
  private mW: number = 0;
  private boundP: number = 10;
  public isOpen: boolean = false;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.updateDimensions();
  }

  public updateDimensions() {
    this.wW = window.innerWidth;
    this.mW = this.menuContainer.nativeElement.getBoundingClientRect().width;
  }

  public openMenu() {
    if (!this.isOpen) {
      this.isOpen = true;
    }
  }

  public closeMenu() {
    if (this.isOpen) {
      this.isOpen = false;
    }
  }

  public testMousePosition(xpos: number) {
    if (xpos > (this.wW * (1 - this.boundP / 100))) {
      this.openMenu();
    }

    if (xpos < (this.wW - this.mW)) {
      this.closeMenu();
    }
  }

  @HostListener('document:mousemove', ['$event']) documentMouseMove(event: MouseEvent) {
    this.testMousePosition(event.clientX);
  }

  @HostListener('window:resize', ['$event']) windowResizeEvent(event: MouseEvent) {
    this.updateDimensions();
  }

}
