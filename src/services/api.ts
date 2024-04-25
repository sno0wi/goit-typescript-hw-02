import axios, { AxiosResponse } from "axios";
import { ParamsTypes, RequestImgParamsProps, ReturnTypes } from "./api.types";

const key = "Qjhh6Cb2QdYGSLBf72MnR8DQudqjygWOgkX801HJ6JY";
axios.defaults.baseURL = `https://api.unsplash.com/`;

export const requestImg = async ({ searchTerm, page }:RequestImgParamsProps):Promise<AxiosResponse<ReturnTypes>> => {
  const params: ParamsTypes = {
    client_id: key,
    query: searchTerm.toLocaleLowerCase(),
    per_page: 6,
    page: page,
  };
  const data = await axios.get<ReturnTypes>(`/search/photos`, { params });
  return data;
};
