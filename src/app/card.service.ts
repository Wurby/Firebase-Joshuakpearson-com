import { Card } from './card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  createCard(card: Card, collection) {}
  editCard(card: Card, collection) {}
  getCards(collection) {}
  deleteCard(card: Card, collection) {}
}
