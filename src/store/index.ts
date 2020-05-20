import Vue from "vue";
import Vuex from "vuex";

import Point from "@/Point";
import * as issueApi from "@/api/issue";

Vue.use(Vuex);

interface RootState {
  points: Array<Point>;
  loadingPoints: boolean;
  isAdding: boolean;
  newPoint: Point | null;
}

export default new Vuex.Store({
  state: {
    points: Array<Point>(),
    loadingPoints: false,
    isAdding: false,
    newPoint: null,
  } as RootState,
  mutations: {
    setPoints(state, points: Array<Point>): void {
      state.points = points;
    },
    toggleAdding(state): void {
      state.isAdding = !state.isAdding;
    },
    setNewPoint(state, point: Point): void {
      state.newPoint = point;
    },
  },
  actions: {
    async GET_POINTS_FROM_ISSUES({ commit }): Promise<void> {
      const points: Array<Point> = await issueApi.getAllToPoints();
      commit("setPoints", points);
    },
    TOGGLE_ADDING({ commit }): void {
      commit("toggleAdding");
    },
    SET_NEW_POINT({ commit }, point: Point): void {
      commit("setNewPoint", point);
    },
  },
  modules: {},
});
