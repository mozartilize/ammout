import mapboxgl from "mapbox-gl";

export default class PulsingDot {
  width: number;
  height: number;
  color: [number, number, number];
  animated: boolean;
  animationDuration: number;
  data: Uint8ClampedArray;
  private size: number;
  private map: mapboxgl.Map | null = null;
  private needRender = true;
  private context: CanvasRenderingContext2D | null = null;

  constructor(
    size: number,
    animated = true,
    color: [number, number, number] = [27, 184, 13],
    animationDuration = 1000,
  ) {
    this.size = size;
    this.width = size;
    this.height = size;
    this.color = color;
    this.animated = animated;
    this.animationDuration = animationDuration;
    this.data = Uint8ClampedArray.from(new Uint8Array(size * size * 4));
  }

  onAdd(map: mapboxgl.Map) {
    this.map = map;
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = this.size;
    canvas.height = this.size;
    this.context = canvas.getContext("2d");
  }

  get animationRatio(): number {
    return this.animated
      ? (performance.now() % this.animationDuration) / this.animationDuration
      : 0;
  }

  get radius() {
    return (
      (this.size / 2) * (this.animated ? 0.4 : 1) -
      (this.animated ? 0 : this.circleStrokeWidth / 2)
    );
  }

  get outerRadius() {
    return (this.size / 2) * this.animationRatio;
  }

  get circleStrokeWidth() {
    return this.size / 30 + this.size * 0.02 * (1 - this.animationRatio);
  }

  get rgbFillColor() {
    return `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, 1)`;
  }

  get rgbAnimationColor() {
    return `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${1 -
      this.animationRatio})`;
  }

  _render() {
    if (!this.context) return;
    // draw inner circle
    this.context.beginPath();
    this.context.arc(this.size / 2, this.size / 2, this.radius, 0, Math.PI * 2);
    this.context.fillStyle = this.rgbFillColor;
    this.context.strokeStyle = "white";
    this.context.lineWidth = this.circleStrokeWidth;
    this.context.fill();
    this.context.stroke();
  }

  _renderAnimation() {
    if (!this.context) return;
    this.context.beginPath();
    this.context.arc(
      this.size / 2,
      this.size / 2,
      this.outerRadius,
      0,
      Math.PI * 2,
    );
    this.context.fillStyle = this.rgbAnimationColor;
    this.context.fill();
  }

  _setDataFromContext() {
    if (this.context)
      // update this image's data with data from the canvas
      this.data = this.context.getImageData(0, 0, this.size, this.size).data;
  }

  // called once before every frame where the icon will be used
  render() {
    if (!this.context || !this.map) return false;
    if (this.animated) {
      // draw outer circle
      this.context.clearRect(0, 0, this.size, this.size);

      this._renderAnimation();
      this._render();

      // continuously repaint the map, resulting in the smooth animation of the dot
      this._setDataFromContext();
      this.map.triggerRepaint();

      // return `true` to let the map know that the image was updated
      return true;
    } else {
      if (!this.needRender) return false;

      this._render();
      this._setDataFromContext();
      this.needRender = false;
      return true;
    }
  }
}
