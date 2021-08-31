import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-regulamento-interno',
  templateUrl: './regulamento-interno.page.html',
  styleUrls: ['./regulamento-interno.page.scss'],
})
export class RegulamentoInternoPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  
  Back(): void {
    this.location.back()
  }
}
