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
  console.log(displayName);
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
    const { user } = await UserSigninPopup();
    createUserDocumentFromAuth(user);
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
    <div>
      <nav className="bg-mainBlack w-full py-4 px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] font-poppins">
        <Link to={"/"} className="text-[18px] font-bold text-mainWhite">
          Kabbs Universal
        </Link>
      </nav>

      <div className="xsm:w-[50%] sm:w-[70%] xl:w-[40%]  mx-auto mt-6 py-12 px-6 border border-greyTen rounded-xl">
        <article>
          <h1 className="font-bold text-[30px] mb-1 text-center">
            Welcome to Kabbs Universal
          </h1>
          <h1 className="font-semibold text-[18px] mb-8 text-center">
            Sign in with your email and password
          </h1>
        </article>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 justify-center w-full xs:w-[70%]  ss:w-[60%] mx-auto"
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
            <label className="font-semibold w-[20%]">Email:</label>
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
            <label className="font-semibold w-[20%]">Password:</label>
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
            className="bg-secondary text-mainWhite w-32 mx-auto mt-8 py-2 rounded-2xl flex flex-col justify-center items-center"
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
        </form>

        <div className="flex gap-2 items-center justify-center mt-2">
          <div className="w-24 xsm:w-36 h-[0.25px] bg-mainBlack"></div>
          <h2>or continue with</h2>
          <div className="w-24 xsm:w-36 h-[0.25px] bg-mainBlack"></div>
        </div>

        <div className="">
          <div className="flex flex-col justify-center items-center">
            <button
              onClick={logGoogleUser}
              className="bg-greySeven w-64 rounded-2xl px-2 py-2 my-2 flex items-center justify-center gap-2 font-semibold"
            >
              <img src={googleIcon} alt="" />
              Google
            </button>
          </div>

          <h2 className="my-2 text-[13px]">
            Don't have an account?{" "}
            <span className="font-bold text-secondary">
              <Link to={"/register"}>Sign Up</Link>
            </span>
          </h2>

          <p className="text-[12px]">
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from Uber and its affiliates to the
            number provided.
          </p>
        </div>
      </div>

      <p className="text-[11px] text-center my-6">
        Copyright &copy; 2023 Kabbs Universal. All Rights Reserved
      </p>
    </div>
  );
};

export default Login;
