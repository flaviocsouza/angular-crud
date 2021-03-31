import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-basic-game-form',
  templateUrl: 'basic-game-form.component.html',
  styles: [
  ]
})
export class BasicGameFormComponent implements OnInit {

  gameForm:FormGroup;
  game:Game;

  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.gameForm = this.builder.group({
      name:[''],
      japaneseName:[''],
      platform:[''],
      releaseDate:[''],
      colorTheme:[''],
    });
  }

  submitGameForm(){
    this.game = Object.assign({}, this.gameForm.value);
    console.log(this.game)
  }

}
