import { Injectable } from '@angular/core';
import { Words, Secrets} from "./words"

@Injectable({
  providedIn: 'root'
})

export class GamemasterService {
  words = Words;
  secrets = Secrets;

  game = {
    gameboard : this.createGame(5,6),
    secret_word : this.getWord(5),
    current_attempt : 0
  }

  constructor() { }

  createGame(width: number, attempts: number) : any[][][]{
    let a = Array(attempts);
    for(var i = 0;i<attempts;i++){
      a[i] = new Array(width);
      for(var j = 0;j<width;j++){
        a[i][j] = ["",-1];
      }
    }
    return a;
  }

  getWord(width: number = 5) : string {
    return this.secrets[Math.floor(Math.random()*this.secrets.length)].toUpperCase();
  }

  isRowValidWord(): boolean{
    return this.words.includes(this.game.gameboard[this.game.current_attempt].map(this.getFirst).join("").toLowerCase())
  }

  getFirst(arr: string|number[]){
    return arr[0]
  }

  getGameboard(){
    return this.game.gameboard;
  }

  getAttempt(): number{
    return this.game.current_attempt;
  }

  submit(){
    for(let i = 0; i < this.game.gameboard[this.game.current_attempt].length; i++){
      if (this.game.gameboard[this.game.current_attempt][i][0] == this.game.secret_word[i]){
        this.game.gameboard[this.game.current_attempt][i][1] = 2;
      }else if(this.game.secret_word.includes(this.game.gameboard[this.game.current_attempt][i][0])){
        this.game.gameboard[this.game.current_attempt][i][1] = 1;
      }else{
        this.game.gameboard[this.game.current_attempt][i][1] = 0;
      }
    }
  }

  nextAttempt(){
    ++this.game.current_attempt;
    return this.game.gameboard[this.game.current_attempt];
  }
}
