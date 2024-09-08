import Swal from "sweetalert2";
import useAuth from "../../Components/hooks/useAuth";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import useCart from "../../Components/hooks/useCart";

/* eslint-disable react/prop-types */
const ItemCard = ({ items }) => {
  const {
    name,
    img,
    currentPrice,
    originalPrice,
    category,
    discount,
    description,
    _id,
  } = items;
  const { user } = useAuth();
  // const navigate = useNavigate();
  // const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAdToCart = (chair) => {
    console.log("add to cart clicking", chair);
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        img,
        currentPrice,
        originalPrice,
        category,
        discount,
        description,
      };
      axiosSecure
        .post("https://furni-flex-server-two.vercel.app/carts", cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500,
            });
            // refetch cart to update the carts items
            refetch();
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          // Handle error here, e.g., show an error message to the user
        });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="border rounded-lg">
      <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
        <img
          width={400}
          height={400}
          className="h-[275px] w-[350px] rounded-lg object-cover"
          src={items.img}
          alt="card navigate ui"
        />
        <div className="grid gap-2">
          <h1 className="text-[18px] font-semibold ">{items.name}</h1>
          <h1 className="text-[18px] font-semibold">
            ${items.currentPrice}
            <span className="text-[#ABABAB] ml-2 mr-4">
              {/* ml-2 mr-4 */}
              <del>$ {items.originalPrice}</del>
            </span>
            <span className="text-[#B92A2A]">{items.discount}</span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-white/60">
            {items.description}
          </p>
        </div>
        <div className="">
          <button
            onClick={() => handleAdToCart(items)}
            className="w-full rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
