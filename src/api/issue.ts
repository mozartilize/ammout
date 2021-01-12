import axios, { AxiosResponse } from "axios";
import Point from "@/Point";

const titleRegex = /\[(.*),\s(.*)\]\s-\s(.*)/;

function getLongLatFromTitle(title: string) {
  const result: any[] | null = title.match(titleRegex);
  if (result == null) return [];
  return [parseFloat(result[1]), parseFloat(result[2])];
}

export async function getAllToPoints() {
  const resp: AxiosResponse = await axios.get(
    "https://api.github.com/repos/mozartilize/ammout-reports/issues",
  );
  const data: any[] = resp.data;
  return data.map(i => new Point(...getLongLatFromTitle(i.title), i.number));
}
