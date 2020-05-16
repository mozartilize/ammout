<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Map from "@/components/Map";
import "@/styles/main.scss";

@Component({
  components: { Map },
})
export default class App extends Vue {}
</script>

<template>
  <div id="app"><Map /></div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: inherit;
  height: inherit;
}
</style>
