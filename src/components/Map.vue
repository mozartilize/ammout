<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import mapboxgl, { GeoJSONSourceRaw, GeoJSONSource } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import Point from "@/Point";
import PulsingDot from "@/PulsingDot";

@Component
export default class Map extends Vue {
  map: mapboxgl.Map | null = null;
  @State("points") points!: Point[];
  @State("isAdding") isAdding!: boolean;
  @State("newPoint") newPoint!: Point | null;
  @Action("GET_POINTS_FROM_ISSUES") getPointsFromIssues!: () => void;
  @Action("SET_NEW_POINT") setNewPoint!: (p: Point) => void;

  @Watch("isAdding")
  onIsAddingChange(val: boolean): void {
    if (this.map == null) return;
    if (val) {
      this.map.on("dblclick", this.handleDbClick);
      this.map.doubleClickZoom.disable();
    } else {
      this.map.off("dblclick", this.handleDbClick);
      this.map.doubleClickZoom.enable();
    }
  }

  @Watch("newPoint")
  onNewPointChange(val: Point | null): void {
    if (this.map == null) return;
    const sourceData: GeoJSON.FeatureCollection = val
      ? {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: val,
              },
              properties: {},
            },
          ],
        }
      : { type: "FeatureCollection", features: [] };
    const newPointSource = this.map.getSource("newPoint") as GeoJSONSource;
    if (newPointSource) newPointSource.setData(sourceData);
  }

  mounted(): void {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGF0YWZsdWN0LWFsaW5lIiwiYSI6ImNrNnh1YW0zdjByMmwzZnM0am45Y3M4b2oifQ.XTTQfsj3LNEr6-8H0SMCXg";
    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v9",
    });

    const pulsingDot: PulsingDot = new PulsingDot(200, this.map);

    this.map.on("load", async () => {
      if (this.map == null) return;
      this.map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

      const source = await this.getSource();
      this.map.addSource("points", source);
      this.map.addLayer({
        id: "points",
        type: "symbol",
        source: "points",
        layout: {
          "icon-image": "pulsing-dot",
        },
      });

      this.map.addSource("newPoint", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      this.map.addLayer({
        id: "newPoint",
        type: "symbol",
        source: "newPoint",
        layout: {
          "icon-image": "pulsing-dot",
        },
      });
    });
  }

  handleDbClick(e: mapboxgl.EventData) {
    const p = new Point(...e.lngLat.toArray());
    this.setNewPoint(p);
  }

  async getSource(): Promise<GeoJSONSourceRaw> {
    await this.getPointsFromIssues();
    return {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: this.points.map((p: Point) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: p,
          },
          properties: {},
        })),
      } as GeoJSON.FeatureCollection,
    };
  }

  beforeDestroy(): void {
    if (this.map) this.map.remove();
  }
}
</script>

<template>
  <div id="map" ref="map"></div>
</template>

<style lang="scss">
#map {
  width: 100%;
  height: 100%;
}
</style>
