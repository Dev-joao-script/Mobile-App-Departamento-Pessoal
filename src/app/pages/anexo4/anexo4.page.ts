import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'


@Component({
  selector: 'app-anexo4',
  templateUrl: './anexo4.page.html',
  styleUrls: ['./anexo4.page.scss'],
})
export class Anexo4Page implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  Back(): void {
    this.location.back()
  }
}
