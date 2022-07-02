import { Component, OnInit } from '@angular/core';
import {ProvidersService} from "../../services/providers.service";

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.sass']
})
export class DistributorsComponent implements OnInit {

  constructor(public providers: ProvidersService) { }

  ngOnInit(): void {
  }

}
