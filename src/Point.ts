export default class Point extends Array {
  id: number | null;
  title: string | null;
  upvotes: number | null;
  downvotes: number | null;

  constructor(...args: any[]) {
    // [long, lat]
    // id is github issue's id
    const point = [args[0], args[1]];
    super(...point);
    this.id = args[2];
    this.title = args[3];
    this.upvotes = null;
    this.downvotes = null;
  }

  setVotes(upvotes: number, downvotes: number) {
    this.upvotes = upvotes;
    this.downvotes = downvotes;
  }
}
