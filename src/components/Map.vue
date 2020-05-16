<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import mapboxgl, { GeoJSONSourceRaw } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PulsingDot from "@/PulsingDot";

@Component
export default class Map extends Vue {
  map: mapboxgl.Map | null = null;

  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGF0YWZsdWN0LWFsaW5lIiwiYSI6ImNrNnh1YW0zdjByMmwzZnM0am45Y3M4b2oifQ.XTTQfsj3LNEr6-8H0SMCXg";
    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v9",
    });

    const pulsingDot: PulsingDot = new PulsingDot(200, this.map);

    this.map.on("load", () => {
      if (this.map == null) return;
      this.map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

      const source: GeoJSONSourceRaw = {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [0, 0],
              },
            },
          ],
        } as GeoJSON.FeatureCollection,
      };
      this.map.addSource("points", source);
      this.map.addLayer({
        id: "points",
        type: "symbol",
        source: "points",
        layout: {
          "icon-image": "pulsing-dot",
        },
      });
    });
  }

  beforeDestroy() {
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
