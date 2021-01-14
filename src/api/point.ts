import axios, { AxiosResponse } from "axios";

export async function createNewPoint(
  newPointFormData: FormData,
): Promise<AxiosResponse> {
  return await axios.post("/api/v1/points/", newPointFormData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export async function createNewVote(
  pointId: number,
  newVoteFormData: FormData,
): Promise<AxiosResponse> {
  return await axios.post(`api/v1/points/${pointId}/votes/`, newVoteFormData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export async function getVotesOfPoint(pointId: number): Promise<AxiosResponse> {
  return await axios.get(`api/v1/points/${pointId}/`);
}
