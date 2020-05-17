export default class Point extends Array {
  id: number;
  constructor(...args: number[]) {
    // [long, lat]
    // id is github issue's id
    const point = [args[0], args[1]];
    super(...point);
    this.id = args[2];
  }
}
