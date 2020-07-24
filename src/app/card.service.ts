import { Card } from './card';
import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cardsCollection: AngularFirestoreCollection<Card>;
  cards$: Observable<Card[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.cardsCollection = afs.collection<Card>('cards');
    this.cards$ = this.cardsCollection.valueChanges().pipe(shareReplay());
  }

  createCard(card: Card) {}
  editCard(card: Card) {
    this.cards$
      .subscribe(
        res => {
          const cardToBeEdited = res.find(el => el.id === card.id);
        },

        err => {
          console.log(err);
        }
      )
      .unsubscribe();
  }
  getAllCards() {
    return this.cards$;
  }
  deleteCard(card: Card) {}
}
