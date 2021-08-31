import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'


@Component({
  selector: 'app-anexo1',
  templateUrl: './anexo1.page.html',
  styleUrls: ['./anexo1.page.scss'],
})
export class Anexo1Page implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  Back(): void {
    this.location.back()
  }
}
