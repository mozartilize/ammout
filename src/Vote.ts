export default class Vote {
  id: number | null;
  vote: boolean;
  comment: string | null;
  pointId: number | null;

  constructor(
    id: number | null,
    vote: boolean,
    comment: string | null,
    pointId: number | null,
  ) {
    this.id = id;
    this.vote = vote;
    this.comment = comment;
    this.pointId = pointId;
  }
}
