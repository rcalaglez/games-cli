import axios from "axios";
import { HttpClient } from "../interfaces/HttpClient";

export class AxiosHttpClient implements HttpClient {
  async get(url: string): Promise<any> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
