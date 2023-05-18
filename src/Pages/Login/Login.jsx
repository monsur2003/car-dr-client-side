import { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
   const { loginUser } = useContext(AuthContext);

   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      loginUser(email, password)
         .then((result) => {
            const loggedUser = result.user;
            if (loggedUser) {
               Swal.fire({
                  title: "Log in Success",
                  text: "Do you want to continue",
                  icon: "success",
                  confirmButtonText: "Okey",
               });
            }
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

   return (
      <div className="hero min-h-screen my-7 bg-base-100">
         <div className="hero-content flex-col lg:flex-row">
            <div className="text-center mr-10 w-1/2 lg:text-left">
               <img src={loginImg} alt="" />
            </div>
            <div className="border-2 w-1/2 p-8 rounded-lg mx-auto">
               <h2 className="text-2xl text-orange-500 font-bold text-center mb-5">
                  Please login{" "}
               </h2>
               <form
                  onSubmit={handleLogin}
                  className="card   mx-auto  flex-shrink-0 max-w-sm  bg-base-100">
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="text"
                           placeholder="email"
                           name="email"
                           className="input input-bordered"
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input
                           type="text"
                           placeholder="password"
                           name="password"
                           className="input input-bordered"
                        />
                        <label className="label flex justify-between">
                           <a
                              href="#"
                              className="label-text-alt link link-hover">
                              Forgot password?
                           </a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button
                           type="submit"
                           className="btn hover:bg-orange-800 bg-orange-600">
                           Login
                        </button>
                     </div>
                  </div>
               </form>
               <div>
                  <p className="text-center">Or sign in with</p>
                  <div className="flex items-center justify-center space-x-3 mt-3">
                     <FaGoogle className="text-2xl font-bold text-orange-400 "></FaGoogle>
                     <FaFacebook className="text-2xl font-bold text-blue-500 "></FaFacebook>
                     <FaLinkedin className="text-2xl font-bold text-blue-500 "></FaLinkedin>
                  </div>
               </div>
               <div className="text-center mt-5">
                  <Link to="/register" className="text-center">
                     New to car doctor{" "}
                     <span className="text-orange-500 link link-hover font-semibold">
                        SignUp
                     </span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
