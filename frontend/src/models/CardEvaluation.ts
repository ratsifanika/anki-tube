export class CardEvaluation {
  constructor(
    public cardId: string,
    public correct: boolean,
    public comment: string = ''
  ) {}

  static fromJSON(json: any): CardEvaluation {
    return new CardEvaluation(
      json.cardId,
      json.correct,
      json.comment || ''
    );
  }
}