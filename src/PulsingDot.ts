import mapboxgl from "mapbox-gl";

export default class PulsingDot {
  private size: number;
  width: number;
  height: number;
  color: number[];
  private map: mapboxgl.Map;
  data: Uint8ClampedArray;
  private context: CanvasRenderingContext2D | null = null;

  constructor(
    size: number,
    map: mapboxgl.Map,
    color: number[] = [27, 184, 13],
  ) {
    this.size = size;
    this.width = size;
    this.height = size;
    this.color = color;
    this.map = map;
    this.data = Uint8ClampedArray.from(new Uint8Array(size * size * 4));
  }

  onAdd() {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = this.size;
    canvas.height = this.size;
    this.context = canvas.getContext("2d");
  }

  // called once before every frame where the icon will be used
  render() {
    const duration = 1000;
    const t = (performance.now() % duration) / duration;

    const radius = (this.size / 2) * 0.3;
    const outerRadius = (this.size / 2) * 0.7 * t + radius;
    const context = this.context;
    if (!context) return false;

    // draw outer circle
    context.clearRect(0, 0, this.size, this.size);
    context.beginPath();
    context.arc(this.size / 2, this.size / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${
      this.color[2]
    }, ${1 - t})`;
    context.fill();

    // draw inner circle
    context.beginPath();
    context.arc(this.size / 2, this.size / 2, radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, 1)`;
    context.strokeStyle = "white";
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // update this image's data with data from the canvas
    this.data = context.getImageData(0, 0, this.size, this.size).data;

    // continuously repaint the map, resulting in the smooth animation of the dot
    this.map.triggerRepaint();

    // return `true` to let the map know that the image was updated
    return true;
  }
}
