export class Card {
  constructor(
    public id: string,
    public front: string,
    public back: string,
    public difficulty: number = 1,
    public numberOfViews: number = 0,
    public numberOfGoodAnswers: number = 0,
    public tags: string[] = [],
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}

  static fromJSON(json: any): Card {
    return new Card(
      json.id,
      json.front,
      json.back,
      json.difficulty || 1,
      json.numberOfViews || 0,
      json.numberOfGoodAnswers || 0,
      json.tags || [],
      new Date(json.createdAt),
      new Date(json.updatedAt)
    );
  }

  // Method to update the card's content
  update(front: string, back: string, tags: string[] = []): void {
    this.front = front;
    this.back = back;
    this.tags = tags;
    this.updatedAt = new Date();
  }
}