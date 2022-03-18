import { Component, OnInit } from '@angular/core';
import { GamemasterService } from '../gamemaster.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: any[6][5];
  currentRow: number = 0;
  currentCol: number = 0;

  constructor(private gamemaster: GamemasterService) {
  }

  ngOnInit(): void {
    this.game = this.gamemaster.getGameboard();
    this.currentRow = this.gamemaster.getAttempt();
  }

}
