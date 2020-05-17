import Vue from "vue";
import Vuex from "vuex";

import Point from "@/Point";
import * as issueApi from "@/api/issue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    points: Array<Point>(),
    loadingPoints: false,
  },
  mutations: {
    setPoints(state, points: Array<Point>) {
      state.points = points;
    },
  },
  actions: {
    async GET_POINTS_FROM_ISSUES({ commit }): Promise<void> {
      const points: Array<Point> = await issueApi.getAllToPoints();
      commit("setPoints", points);
    },
  },
  modules: {},
});
