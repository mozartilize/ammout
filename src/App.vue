<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";

import Map from "@/components/Map.vue";
import "@/styles/main.scss";

import Point from "@/Point";
import { AxiosResponse } from "axios";

@Component({
  components: { Map },
})
export default class App extends Vue {
  @State("isAdding") isAdding!: boolean;
  @State("newPoint") newPoint!: Point | null;
  @State("selectedPoint") selectedPoint!: Point | null;
  @Action("TOGGLE_ADDING") toggleAdding!: () => void;
  @Action("SET_NEW_POINT") setNewPoint!: (p: Point) => void;
  @Action("CREATE_NEW_POINT") createNewPoint!: (
    p: Point,
  ) => AxiosResponse | never;
}
</script>

<template>
  <div id="app">
    <button @click="toggleAdding" class="toggle-adding-btn">
      {{ isAdding ? "Done" : "Add new point" }}
    </button>
    <div v-if="newPoint" class="sidebar" :class="{ shown: !!newPoint }">
      <input
        type="text"
        name="long"
        disabled
        :value="newPoint ? newPoint[0] : ''"
      />
      <input
        type="text"
        name="lat"
        disabled
        :value="newPoint ? newPoint[1] : ''"
      />
      <button @click="createNewPoint(newPoint)">Create</button
      ><button @click="() => setNewPoint(null)">Cancel</button>
    </div>
    <div
      v-if="selectedPoint"
      class="sidebar"
      :class="{ shown: !!selectedPoint }"
    >
      <input
        type="text"
        name="long"
        disabled
        :value="selectedPoint ? selectedPoint[0] : ''"
      />
      <input
        type="text"
        name="lat"
        disabled
        :value="selectedPoint ? selectedPoint[1] : ''"
      />
      <div>
        Vote:
        <button>Up</button>
        <button>Down</button>
      </div>
    </div>
    <Map />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: inherit;
  height: inherit;
}

.toggle-adding-btn {
  z-index: 1;
  position: absolute;
  top: 10px;
  left: 10px;
}
.sidebar {
  z-index: 1;
  width: 25%;
  height: 100%;
  position: absolute;
  top: 0;
  right: -25%;
  background-color: #ffffff;
}
.sidebar.shown {
  right: 0%;
}
</style>
