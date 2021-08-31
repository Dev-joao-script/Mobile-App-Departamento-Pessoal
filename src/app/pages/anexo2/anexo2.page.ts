import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'


@Component({
  selector: 'app-anexo2',
  templateUrl: './anexo2.page.html',
  styleUrls: ['./anexo2.page.scss'],
})
export class Anexo2Page implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  Back(): void {
    this.location.back()
  }
}
