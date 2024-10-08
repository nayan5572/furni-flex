import { useContext } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo.png";
import useCart from "../../Components/hooks/useCart";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  console.log(cart.length);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    navigate("/login");
  };
  const navigate = useNavigate();
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li>
        <Link to="/custom">Custom</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div className="w-full">
      <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <Link to="/">
            <div className="btn btn-ghost text-xl">
              <img src={logo1} alt="logo" />
              <h2>
                Furni<span className="text-[#1E99F5]">Flex</span>
              </h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <Link to="/orderDetails">
              <div className="relative w-fit">
                <FaBasketShopping className="text-4xl" />
                <span className="absolute -right-1 -bottom-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">
                  {cart.length}
                </span>
              </div>
            </Link>
          </div>
          <div className="ml-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-end"></div>
    </div>
  );
};

export default Navbar;
