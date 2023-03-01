import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {

  isOpen = false;
  isOpenMessage = false;

  constructor() { }

  ngOnInit(): void {
  }

}
