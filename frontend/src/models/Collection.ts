import { Card } from './Card';

export class Collection {
  constructor(
    public id: string,
    public name: string,
    public cards: Card[] = [],
    public createdAt: Date,
    public updatedAt: Date
  ) {
  }

  static fromJSON(json: any): Collection {
    return new Collection(
      json.id,
      json.name,
      json.cards ? json.cards.map((card: any) => Card.fromJSON(card)) : [],
      new Date(json.createdAt),
      new Date(json.updatedAt)
    );
  }

  randomCard(): Card | null {
    if (this.cards.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards[randomIndex];
  }


}