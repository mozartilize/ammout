import axios, { AxiosResponse } from "axios";
import Point from "@/Point";

export async function getAllToPoints() {
  const resp: AxiosResponse = await axios.get("/api/v1/points/");
  const data: any[] = resp.data;
  return data.map(i => new Point(i.long, i.lat, i.id));
}
