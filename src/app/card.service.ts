import { Card } from './card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  createCard(card: Card) {}
  editCard(card: Card) {}
  getCards() {}
  deleteCard(card: Card) {}
}
