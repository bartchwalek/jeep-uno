import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-live-view',
  templateUrl: './live-view.component.html',
  styleUrls: ['./live-view.component.sass']
})
export class LiveViewComponent implements OnInit, AfterViewInit {

  @ViewChild('live') live: ElementRef;

  imgsrc: string = 'https://www.jeep.uno/assets/live.jpg';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.updateLiveView();
  }

  public updateLiveView(): void {
    const img: HTMLImageElement = this.live.nativeElement;

    img.src = `${this.imgsrc}?${Math.random()}`;
    setInterval(() => {
      img.src = `${this.imgsrc}?${Math.random()}`;
    }, 10000);
  }
}
