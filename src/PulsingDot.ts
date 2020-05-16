import mapboxgl from "mapbox-gl";

export default class PulsingDot {
  width: number;
  height: number;
  private map: mapboxgl.Map;
  data: Uint8ClampedArray;
  private context: CanvasRenderingContext2D | null = null;

  constructor(size: number, map: mapboxgl.Map) {
    this.width = size;
    this.height = size;
    this.map = map;
    this.data = Uint8ClampedArray.from(new Uint8Array(size * size * 4));
  }

  onAdd() {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext("2d");
  }

  // called once before every frame where the icon will be used
  render() {
    const duration = 1000;
    const t = (performance.now() % duration) / duration;

    const radius = (this.height / 2) * 0.3;
    const outerRadius = (this.height / 2) * 0.7 * t + radius;
    const context = this.context;
    if (context == null) return false;

    // draw outer circle
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = "rgba(27, 184, 13," + (1 - t) + ")";
    context.fill();

    // draw inner circle
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(27, 184, 13, 1)";
    context.strokeStyle = "white";
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // update this image's data with data from the canvas
    this.data = context.getImageData(0, 0, this.width, this.height).data;

    // continuously repaint the map, resulting in the smooth animation of the dot
    this.map.triggerRepaint();

    // return `true` to let the map know that the image was updated
    return true;
  }
}
