import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo1 from "../../assets/images/logo.png";
import { AuthContext } from "../../Providers/AuthProviders";
import "../SignUp/SignUp.css";

const Login = () => {
  // const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const naviGate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Login",
        showConfirmButton: false,
        timer: 1500,
      });
      naviGate(from, { replace: true });
    });
  };

  return (
    <div className="flex justify-evenly">
      <div>
        <div className="bg-white flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md bg-gray-100 shadow-md rounded-lg px-8 py-6">
            {/* Header Section */}
            <div className="mb-6">
              <h1 className="text-2xl font-semibold">Welcome Back!</h1>
              <p className="text-gray-500">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Sign-In Form */}
            <form onSubmit={handleLogin}>
              <div className="mt-4">
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mt-4 relative">
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer">
                  {/* Eye Icon (for show/hide password functionality) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 3c-5 0-9 7-9 7s4 7 9 7 9-7 9-7-4-7-9-7zm0 12a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                </span>
              </div>

              <div className="mt-2 text-right">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot Password
                </a>
              </div>

              <div className="mt-4 flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-blue-500 underline">
                    Terms & Policy
                  </a>
                </label>
              </div>

              <div className="mt-6">
                <input
                  className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 cursor-pointer"
                  type="submit"
                  value="Sign In"
                />
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="w-full border-gray-300" />
              <span className="px-2 text-sm text-gray-400">or</span>
              <hr className="w-full border-gray-300" />
            </div>

            {/* Social Sign-In Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="w-full bg-gray-100 border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-200">
                <img
                  src="https://img.icons8.com/color/20/000000/google-logo.png"
                  alt="Google logo"
                  className="mr-2"
                />
                <span className="text-[12px] font-medium">
                  Sign in with Google
                </span>
              </button>
              <button className="w-full bg-gray-100 border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-200">
                <img
                  src="https://img.icons8.com/ios-filled/20/000000/mac-os.png"
                  alt="Apple logo"
                  className="mr-2"
                />
                <span className="text-[12px] font-medium">
                  Sign in with Apple
                </span>
              </button>
            </div>

            {/* New User? */}
            <p className="text-center text-sm text-gray-500 mt-6">
              New here?
              <Link to="/signUp" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="signUp-text pt-[325px] pb-[330px] bg-center bg-no-repeat bg-cover">
        <div>
          <div className="text-center text-white">
            <img className="mx-auto w-[89px] h-[85px]" src={logo1} alt="" />
            <h1 className="text-[40px] font-bold">
              Furni<span className="text-blue-500">Flex</span>
            </h1>
            <p className="text-[16px] px-24 font-medium text-[#C8C4C4]">
              Discover a seamless shopping experience with our curated <br />
              collection of products. From fashion to electronics, we bring
              quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
