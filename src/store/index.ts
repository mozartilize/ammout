import Vue from "vue";
import Vuex, { Store } from "vuex";

import Point from "@/Point";
import * as issueApi from "@/api/issue";
import * as pointApi from "@/api/point";
import { AxiosResponse } from "axios";

Vue.use(Vuex);

interface RootState {
  points: Array<Point>;
  loadingPoints: boolean;
  isAdding: boolean;
  newPoint: Point | null;
}

function makeNewPointFormData(p: Point): FormData {
  const formData = new FormData();
  formData.append("long", p[0]);
  formData.append("lat", p[1]);
  return formData;
}

export default new Store({
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
    appendPoint(state, point: Point): void {
      state.points.push(point);
    },
    toggleAdding(state): void {
      state.isAdding = !state.isAdding;
    },
    setNewPoint(state, point: Point): void {
      state.newPoint = point;
    },
  },
  actions: {
    async GET_POINTS_FROM_ISSUES({ commit }): Promise<void> | never {
      const points: Array<Point> = await issueApi.getAllToPoints();
      commit("setPoints", points);
    },
    TOGGLE_ADDING({ commit }): void {
      commit("toggleAdding");
    },
    SET_NEW_POINT({ commit }, point: Point): void {
      commit("setNewPoint", point);
    },
    async CREATE_NEW_POINT(
      { commit },
      point: Point,
    ): Promise<AxiosResponse> | never {
      const newPointFormData: FormData = makeNewPointFormData(point);
      const resp = await pointApi.createNewPoint(newPointFormData);
      commit("appendPoint", point);
      commit("setNewPoint", null);
      return resp;
    },
  },
  modules: {},
});
