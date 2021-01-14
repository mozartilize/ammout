import Vue from "vue";
import Vuex, { Store } from "vuex";

import Point from "@/Point";
import Vote from "@/Vote";
import * as issueApi from "@/api/issue";
import * as pointApi from "@/api/point";
import { AxiosResponse } from "axios";

Vue.use(Vuex);

interface RootState {
  points: Array<Point>;
  loadingPoints: boolean;
  isAdding: boolean;
  newPoint: Point | null;
  selectedPoint: Point | null;
  vote: Vote | null;
}

function makeNewPointFormData(p: Point): FormData {
  const formData = new FormData();
  formData.append("long", p[0]);
  formData.append("lat", p[1]);
  return formData;
}

function makeNewVoteFormData(v: Vote): FormData {
  const formData = new FormData();
  formData.append("vote", v.vote ? "1" : "0");
  if (v.comment) {
    formData.append("comment", v.comment);
  }
  return formData;
}

export default new Store({
  state: {
    points: Array<Point>(),
    loadingPoints: false,
    isAdding: false,
    newPoint: null,
    selectedPoint: null,
    vote: null,
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
    setNewPoint(state, point: Point | null): void {
      state.newPoint = point;
    },
    setSelectedPoint(state, point: Point | null): void {
      state.selectedPoint = point;
    },
    setVoteForSelectedPoint(state, votes): void {
      if (!state.selectedPoint) return;
      state.selectedPoint.setVotes(votes.upvotes, votes.downvotes);
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
    SET_NEW_POINT({ commit }, point: Point | null): void {
      commit("setNewPoint", point);
    },
    SET_SELECTED_POINT({ commit, dispatch }, point: Point | null): void {
      commit("setSelectedPoint", point);
      dispatch("SET_VOTES_FOR_SELECTED_POINT");
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
    async CREATE_NEW_VOTE(
      { commit },
      vote: Vote,
    ): Promise<AxiosResponse> | never {
      if (vote.pointId) {
        const newVoteFormData: FormData = makeNewVoteFormData(vote);
        const resp = await pointApi.createNewVote(
          vote.pointId,
          newVoteFormData,
        );
        commit("setVote", null);
        return resp;
      } else {
        throw new Error("undefined pointId");
      }
    },
    async SET_VOTES_FOR_SELECTED_POINT({ state, commit }) {
      if (!state.selectedPoint) return;
      if (!state.selectedPoint.id) return;
      const resp = await pointApi.getVotesOfPoint(state.selectedPoint.id);
      const votes = resp.data;
      console.log(votes);
      commit("setVoteForSelectedPoint", votes);
    },
  },
  modules: {},
});
