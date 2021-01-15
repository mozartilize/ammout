<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";

import Map from "@/components/Map.vue";
import "@/styles/main.scss";

import Point from "@/Point";
import Vote from "@/Vote";
import { AxiosResponse } from "axios";

@Component({
  components: { Map },
})
export default class App extends Vue {
  @State("isAdding") isAdding!: boolean;
  @State("newPoint") newPoint!: Point | null;
  @State("selectedPoint") selectedPoint!: Point | null;
  @State("selectedPointVotes") selectedPointVotes!: [
    number | null,
    number | null,
  ];
  @Action("TOGGLE_ADDING") toggleAdding!: () => void;
  @Action("SET_NEW_POINT") setNewPoint!: (p: Point) => void;
  @Action("CREATE_NEW_POINT") createNewPoint!: (
    p: Point,
  ) => AxiosResponse | never;
  @Action("SET_SELECTED_POINT") setSelectedPoint!: (p: Point | null) => void;
  @Action("CREATE_NEW_VOTE") createNewVote!: (vote: Vote) => void;
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
      <div>
        <button @click="setSelectedPoint(null)">close</button>
      </div>
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
        <button
          @click="createNewVote({ vote: true, pointId: selectedPoint.id })"
        >
          Up</button
        ><span>{{ selectedPointVotes[0] }}</span>
        <button
          @click="createNewVote({ vote: false, pointId: selectedPoint.id })"
        >
          Down</button
        ><span>{{ selectedPointVotes[1] }}</span>
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
