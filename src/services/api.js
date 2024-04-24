import axios from "axios";

const key = "Qjhh6Cb2QdYGSLBf72MnR8DQudqjygWOgkX801HJ6JY";
axios.defaults.baseURL = `https://api.unsplash.com/`;

export const requestImg = async ({ searchTerm, page }) => {
  const params = new URLSearchParams({
    client_id: key,
    query: searchTerm.toLocaleLowerCase(),
    per_page: 6,
    page: page,
  });
  const data = await axios.get(`/search/photos?${params}`);
  return data;
};
