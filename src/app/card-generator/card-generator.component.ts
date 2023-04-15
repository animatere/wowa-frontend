import { Component, Injectable } from '@angular/core';
import { repos } from'../../Models/Models';
import { CardService } from 'src/Services/card.service';
import { CardType } from'../Enums/Enums';

@Component({
  selector: 'card-generator-component',
  templateUrl: './card-generator.component.html',
  styleUrls: ['./card-generator.component.css']
})

export class CardGeneratorComponent {

  cardType: string = "";
  cardText: string = "";
  cardCategory: string = "";
  results: any;
 
  constructor(private cardService: CardService) {

  }
 
  public getCards() {
    this.cardService.getCards()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.results = response; 
          console.log(this.results);
        }
      )
  }

  public createCard() {
    this.cardService.createCard(this.cardType, this.cardText, this.cardCategory)
      .subscribe(
        (response) => {                           //next() callback
          this.results = response; 
          console.log(this.results);
        }
      )
  }
}
