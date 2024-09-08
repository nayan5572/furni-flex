import axios from "axios";

const axiosSecure = axios.create({
  baseURL:
    "https://furni-flex-server-ay3hufs3f-halder25572s-projects.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
