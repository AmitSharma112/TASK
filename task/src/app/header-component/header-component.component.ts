import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
 openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("ham").style.display = "none";
}

 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("ham").style.display = "block";
}

}
