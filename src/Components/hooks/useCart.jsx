import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  // tanStack Query
  const axiosSecures = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecures.get(`/carts?email=${user.email}`);
      //   `/itemCart?email=${user.email}`
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
