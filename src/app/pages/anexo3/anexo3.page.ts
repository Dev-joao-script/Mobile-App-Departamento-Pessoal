import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-anexo3',
  templateUrl: './anexo3.page.html',
  styleUrls: ['./anexo3.page.scss'],
})
export class Anexo3Page implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  Back(): void {
    this.location.back()
  }

}
