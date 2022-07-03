import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { faVideo, faHome, faCogs, faUser, faCommentDots, faChalkboardTeacher, faIdCard, faImages, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

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
        right: '-480px',
        opacity: 0.2
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
  public faYoutube = faVideo;
  public faHome = faHome;
  public faCogs = faCogs;
  public faUser = faUser;
  public faCommentDots = faCommentDots;
  public faChalkboardTeacher = faChalkboardTeacher;
  public faIdCard = faIdCard;
  public faImages = faImages;
  public faVideoCamera = faVideoCamera;

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
  public stick: boolean = false;
  public preventClose: boolean = false;

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.updateDimensions();
  }

  public updateDimensions() {
    this.wW = window.innerWidth;
    this.mW = this.menuContainer.nativeElement.getBoundingClientRect().width + 20;
  }

  public openMenu(stick: boolean = false) {
    if (!this.isOpen) {
      this.isOpen = true;
      this.preventClose = true;
    }
  }

  public closeMenu(stick: boolean = false) {
    if (this.isOpen && !this.preventClose) {
      this.isOpen = false;
    }
  }

  public toggleMenu(stick: boolean = false) {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }

  public testMousePosition(xpos: number) {
    if (xpos > (this.wW * (1 - this.boundP / 100))) {
      this.openMenu();
    }

    if (xpos < (this.wW - this.mW)) {
      if (!this.stick) {
        this.closeMenu();
      }
    }
  }

  @HostListener('document:mousemove', ['$event']) documentMouseMove(event: MouseEvent) {
    this.testMousePosition(event.clientX);
  }

  @HostListener('window:resize', ['$event']) windowResizeEvent(event: MouseEvent) {
    this.updateDimensions();
  }

  @HostListener('document:contextmenu', ['$event']) documentContextMenu(event: MouseEvent) {
    return false;
  }

  @HostListener('mouseenter', ['$event']) mouseEnter(event: MouseEvent) {
    this.preventClose = false;
  }
  @HostListener('mouseleave', ['$event']) mouseLeave(event: MouseEvent) {
    this.preventClose = false;
  }

  @HostListener('document:mousedown', ['$event']) documentClick(event: MouseEvent | Event) {
    event = event || window.event;
    let rB: boolean = false;
    if ('which' in event) {
      rB = (event as MouseEvent).which === 3;
    } else if ('button' in event) {
      rB = (event as MouseEvent).button === 2;
    }
    if (rB) {
      event.preventDefault();
      event.stopPropagation();
      event.cancelBubble = true;
      this.toggleMenu();
      return false;
    }
  }

}
