import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  UserSigninPopup,
  createUserDocumentFromAuth,
  signInUserWithEmail,
} from "../../Utilities/Firebase/Firebase.js";
import { googleIcon } from "../../assets/index";
import ReactLoading from "react-loading";
import { FaTimes } from "react-icons/fa";
import { UserContexts } from "../../contexts/UserContext.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const Login = ({ displayName }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const [errorMsg, setErrorMsg] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const errorRef = React.useRef();

  const [isLoading, setIsLoading] = useState(false);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContexts);

  React.useEffect(
    function () {
      setErrorMsg("");
    },
    [email, password]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    try {
      const { user } = await UserSigninPopup();
      createUserDocumentFromAuth(user);
      const displayName = user.displayName;
      const email = user.email;
      // console.log(myGoogleEmail);
      // console.log(myGoogleDisplayName);
      localStorage.setItem("email", email);
      localStorage.setItem("displayName", displayName);
      navigate(from, { replace: true });
    } catch (error) {}
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { user } = await signInUserWithEmail(email, password);
      console.log(user.displayName);
      setCurrentUser(user);
      localStorage.setItem("email", email);
      navigate(from, { replace: true });
      resetFormFields();
      setIsLoading(false);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setErrorMsg("Incorrect Password");
        setIsLoading(false);
      } else if (error.code === "auth/user-not-found") {
        setErrorMsg("no user associated with this email");
        setIsLoading(false);
      } else {
        setErrorMsg("Oops! an error occurred!");
        setIsLoading(false);
      }
      console.log(error);
    }
  };

  return (
    <>
      <nav className="bg-mainBlack w-full py-4 px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] font-poppins fixed z-40">
        <Link to={"/"} className="text-[18px] font-bold text-mainWhite">
          Kabbs Universal
        </Link>
      </nav>

      <section className="flex flex-col justify-center items-center md:flex-row bg-primaryYellow px-3 ss:px-6 sm:px-12 md:px-0  md:bg-greyThree ">
        <div className="log md:h-[100vh] md:w-[50%] w-full pt-24 sm:px-12 lg:px-[6rem] xl:px-[10rem] flex flex-col md:justify-between">
          <div>
            <article>
              <h1 className="font-bold text-[30px] mb-1 text-center">
                Welcome to Kabbs Universal
              </h1>
              <h1 className="font-semibold text-[18px] mb-8 text-center">
                Sign in with your email and password
              </h1>
            </article>
            <div className="hidden sm:flex">
              <div className="road ">
                <div className="taxi">
                  <div className="light_beam"></div>
                  <span>
                    <b></b>
                    <i></i>
                  </span>
                </div>

                <div className="taxii">
                  <div className="light_beamm"></div>
                  <span>
                    <b></b>
                    <i></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[13px] my-6 text-center hidden md:block">
            Copyright &copy; 2023 Kabbs Universal. All Rights Reserved
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto my-12  md:my-0 bg-greyNine p-4 md:p-1 md:pl-0 md:pt-0  rounded-2xl">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-greyFive rounded-2xl p-12 bg-greyFour gap-2 justify-center mx-auto"
          >
            <p
              ref={errorRef}
              className={
                errorMsg
                  ? "bg-Lightgrey text-mainRed border border-mainRed px-4 py-3 mt-2 rounded-xl relative flex items-center gap-2"
                  : "offscreen"
              }
              aria-live="assertive"
              role="alert"
            >
              {errorMsg ? <FaTimes /> : ""}
              {errorMsg}
            </p>

            <div className="flex justify-between items-center ">
              <label className="font-semibold ">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
                name="email"
                value={email}
                className="border border-lightBlue px-3 py-2 w-[70%] xsm:w-[70%] rounded-2xl ss:w-[80%]"
              />
            </div>

            <div className="flex justify-between items-center gap-3">
              <label className="font-semibold ">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                onChange={handleChange}
                name="password"
                value={password}
                className="border border-lightBlue px-3 py-2 w-[70%] rounded-2xl ss:w-[80%] xsm:w-[70%]"
              />
            </div>

            <button
              type="submit"
              className="bg-secondary text-mainWhite w-full mx-auto mt-4 mb-4 py-2 rounded-2xl flex flex-col justify-center items-center"
            >
              Log In{" "}
              {isLoading ? (
                <ReactLoading
                  type={"spin"}
                  color={"#fff"}
                  height={20}
                  width={20}
                  className="mt-1"
                />
              ) : (
                ""
              )}
            </button>

            <h2 className="text-center">or continue with</h2>

            <div className="flex flex-col justify-center items-center">
              <button
                type="button"
                onClick={logGoogleUser}
                className="bg-greySeven w-full text-mainBlack rounded-2xl px-2 py-2 my-1 flex items-center justify-center gap-2 font-semibold"
              >
                <img src={googleIcon} alt="" />
                Google
              </button>
            </div>
          </form>
          <h2 className="my-2 text-[13px] text-greySeven">
            Don't have an account?{" "}
            <span className="font-bold text-secondary">
              <Link to={"/register"}>Sign Up</Link>
            </span>
          </h2>
        </div>
        <p className="text-[13px] my-6 text-center  md:hidden">
          Copyright &copy; 2023 Kabbs Universal. All Rights Reserved
        </p>
      </section>
    </>
  );
};

export default Login;
