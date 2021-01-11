export default class Point extends Array {
  id: number | null;
  title: string | null;

  constructor(...args: any[]) {
    // [long, lat]
    // id is github issue's id
    const point = [args[0], args[1]];
    super(...point);
    this.id = args[2];
    this.title = args[3];
  }

  setNewCordination(long: number, lat: number) {
    this[0] = long;
    this[1] = lat;
  }
}
