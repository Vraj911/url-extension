import { loginApi, signupApi, logoutApi} from "../api/authApi";
export const loginUser = async (formData) => {
  const res = await loginApi(formData);
  return res.data;
};
export const signupUser = async (formData) => {
  const res = await signupApi(formData);
  return res.data;
};
export const logoutUser=async ()=>{
  try {
    const response=await logoutApi();
    return response.status===200;
  } catch (error) {
    console.log(error);
    return false;
  }
}