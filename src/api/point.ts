import axios, { AxiosResponse } from "axios";

export async function createNewPoint(
  newPointFormData: FormData,
): Promise<AxiosResponse> {
  return await axios.post("/api/v1/points/", newPointFormData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}
