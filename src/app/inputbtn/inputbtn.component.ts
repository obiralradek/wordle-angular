import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputbtn',
  templateUrl: './inputbtn.component.html',
  styleUrls: ['./inputbtn.component.css']
})
export class InputbtnComponent implements OnInit {

  @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }


}
