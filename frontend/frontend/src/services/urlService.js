import { shortenUrlApi, getShortUrlApi, getStatsApi } from "../api/urlApi";
export const shortenUrl = async (url, token) => {
  const res = await shortenUrlApi({ originalUrl: url }, token);
  return res.data;
};
export const fetchShortUrl = async (url, token) => {
  const res = await getShortUrlApi({ originalUrl: url }, token);
  return res.data.shortUrl;
};
export const fetchStats = async (token) => {
  const res = await getStatsApi(token);
  return res.data;
};
