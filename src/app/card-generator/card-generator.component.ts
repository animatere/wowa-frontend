import { Component, OnInit } from '@angular/core';
import { Card } from'../../models/Models';
import { CardService } from 'src/services/card.service';
import { CardType, CardCategory } from'../../enums/Enums';
import { FormControl, FormGroup } from '@angular/forms'
import { AngularToastService } from "angular-toasts";

@Component({
  selector: 'card-generator-component',
  templateUrl: './card-generator.component.html',
  styleUrls: ['./card-generator.component.css']
})

export class CardGeneratorComponent implements OnInit {

  cardCollection: Card[] = [];
  cardCategory = CardCategory;
  categoryKeys: string[] =[];
  cardType = CardType;
  typeKeys: string[] =[];

  Card = new FormGroup({
    cardText: new FormControl<string>(''),
    cardType: new FormControl<string>(''),
    cardCategory: new FormControl<string>('')
  });
 
  constructor(private cardService: CardService, private _toast: AngularToastService) {
    this.categoryKeys = Object.values(this.cardCategory);
    this.typeKeys = Object.values(this.cardType);
  }

  ngOnInit() {
    this.getCards();
  }
 
  public getCards() {
    this.cardService.getCards()
      .subscribe(
        (response) => {
          this.cardCollection = response; 
          this._toast.success("Success", "Successfully fetched cards from server.");
        }, (error) => {
          this._toast.error("Error", "Error while fetching cards from server.");
        }
      )
  }

  public refreshForm () {
    this.Card = new FormGroup({
      cardText: new FormControl<string>(''),
      cardType: new FormControl<string>(''),
      cardCategory: new FormControl<string>('')
    })
  }

  public createCard() {

    var cardText = "";
    var cardType = "";
    var cardCategory = "";

    if(this.Card.controls.cardText.value){
      cardText = this.Card.controls.cardText.value;
    }

    if(this.Card.controls.cardType.value){
      cardType = this.Card.controls.cardType.value;
    }

    if(this.Card.controls.cardCategory.value){
      cardCategory = this.Card.controls.cardCategory.value;
    }

    this.cardService.createCard(cardText, cardType, cardCategory)
      .subscribe(
        (response) => {
          console.log(response);
          this.refreshForm();
          this._toast.success("Success", "Successfully created card!");
        }, (error) => {
          this._toast.error("Error", "Error while creating card!");
          console.log(error);
        }
      )
  }
}
