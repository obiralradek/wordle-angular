import { Component, OnInit, Input } from '@angular/core';
import { GamemasterService } from '../gamemaster.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() row: any[5];

  krow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  krow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  krow3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"];

  constructor(private gamemaster: GamemasterService) { 
  }

  ngOnInit(): void {
    
  }

  getFirst(arr: string|number[]){
    return arr[0]
  }

  handleClick(val: string) : void{
    switch(val){
      case "ENTER" : {
        if (this.row.map(this.getFirst).includes("")){
          return;
        }
        if (!this.gamemaster.isRowValidWord()){
          return;
        }
        this.gamemaster.submit();
        this.row = this.gamemaster.nextAttempt();
        return;

      }
      
      case "BACKSPACE": {
        for(let i = this.row.length -1; i >= 0; i--){
          if (this.row[i][0] != ""){
            this.row[i][0] = "";
            return;
          }
        }
        return;
      }

      default: {
        if (this.row[4][0] != "") return;
        for(let i = 0; i < this.row.length; i++){
          if (this.row[i][0] == ""){
            this.row[i][0] = val;
            return;
          }
        }
      }
    }
  }
}
