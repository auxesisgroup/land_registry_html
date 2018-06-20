import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homenavbar',
  templateUrl: './homenavbar.component.html',
  styleUrls: ['./homenavbar.component.css']
})
export class HomenavbarComponent implements OnInit {
  role='';
  constructor() { }

  ngOnInit() {
    this.role=localStorage.getItem("userRole");
  }

}
