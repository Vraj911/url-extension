import { postReviewApi, getReviewsApi } from "../api/reviewApi";
export const submitReview = async (data, token) => {
  const res = await postReviewApi(data, token);
  return res.data;
};
export const fetchReviews = async (token) => {
  const res = await getReviewsApi(token);
  return res.data;
};
