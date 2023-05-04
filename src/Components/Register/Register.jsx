import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  UserSigninPopup,
  createUserDocumentFromAuth,
  createAuthUserWithEAndP,
} from "../../Utilities/Firebase/Firebase.js";
import ReactLoading from "react-loading";
import { FaTimes } from "react-icons/fa";
import { UserContexts } from "../../contexts/UserContext.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const [isLoading, setIsLoading] = useState(false);

  const [errorMsg, setErrorMsg] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const errorRef = React.useRef();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

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

    if (password != confirmPassword) {
      setErrorMsg("password and confirm password does not match");
      return;
    }

    try {
      setIsLoading(true);
      const { user } = await createAuthUserWithEAndP(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      localStorage.setItem("displayName", displayName);
      localStorage.setItem("email", email);
      navigate(from, { replace: true });
      setCurrentUser(user);
      resetFormFields();
      setIsLoading(false);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMsg("user with this email already exists");
        setIsLoading(false);
      } else if (error.code === "auth/weak-password") {
        setErrorMsg("Password should be at least 6 characters");
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
                Get started, Sign up with your email and password
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

        <div className="flex flex-col justify-center items-center mx-auto my-12  md:my-0 bg-greyNine p-4 md:p-1 md:pl-0 md:pt-0 sm:w-[80%] md:w-[40%] rounded-2xl ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-greyFive rounded-2xl p-12 bg-greyFour gap-2 justify-center mx-auto"
          >
            <p
              ref={errorRef}
              className={
                errorMsg
                  ? "bg-Lightgrey text-mainRed border border-mainRed px-4 py-3 mt-2 rounded-xl relative flex items-center gap-2 font-semibold"
                  : "offscreen"
              }
              aria-live="assertive"
              role="alert"
            >
              {errorMsg ? <FaTimes /> : ""}
              {errorMsg}
            </p>

            <div className="flex justify-between items-center">
              <label className="font-semibold w-[25%] ">FullName :</label>
              <input
                type="text"
                placeholder="Enter your firstname and lastname"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
                className="border border-lightBlue px-3 py-2 w-[70%] xsm:w-[70%] rounded-2xl ss:w-[80%] text-mainBlack"
              />
            </div>

            <div className="flex justify-between items-center ">
              <label className="font-semibold ">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
                name="email"
                value={email}
                className="border border-lightBlue px-3 py-2 w-[70%] xsm:w-[70%] rounded-2xl ss:w-[80%] text-mainBlack"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="font-semibold w-[25%]">Password :</label>
              <input
                type="password"
                placeholder="enter your password"
                required
                onChange={handleChange}
                name="password"
                value={password}
                className="border border-lightBlue px-3 py-2 w-[70%] xsm:w-[70%] rounded-2xl ss:w-[80%]"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="font-semibold w-[25%] ">
                Confirm Password:
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
                className="border border-lightBlue px-3 py-2 w-[70%] xsm:w-[70%] rounded-2xl ss:w-[80%]"
              />
            </div>
            <div className="text-[12px] my-2 mt-4">
              <p>
                By proceeding, you consent to get calls, WhatsApp or SMS
                messages, including by automated means, from Uber and its
                affiliates to the number provided.
              </p>
            </div>
            <button
              type="submit"
              className="bg-secondary text-mainWhite w-full mx-auto mt-8 py-2 rounded-2xl flex flex-col justify-center items-center"
            >
              Sign Up{" "}
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
          <h2 className="my-2 text-[13px]">
            Already have an account?
            <span className="font-bold text-secondary">
              <Link to={"/sign-in"}>Sign In</Link>
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

export default Register;

//  <div>
//       <nav className="bg-mainBlack w-full py-4 px-3 ss:px-6 sm:px-12 lg:px-[6rem] xl:px-[10rem] font-poppins">
//         <Link to={"/"} className="text-[18px] font-bold text-mainWhite">
//           Kabbs Universal
//         </Link>
//       </nav>

//       <div className="md:w-[50%] sm:w-[70%] xl:w-[40%]  mx-auto mt-6 py-12 px-6 border border-greyTen rounded-xl">
//         <article>
//           <h1 className="font-bold text-[30px] mb-1 text-center">
//             Welcome to Kabbs Universal
//           </h1>
//           <h1 className="font-semibold text-[18px] mb-8 text-center">
//             Get started, Sign up with your email and password
//           </h1>
//         </article>
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-2 justify-center items-center rounded-xl w-full  sm:w-[80%] mx-auto bg-greyFive p-4"
//         >
//           <p
//             ref={errorRef}
//             className={
//               errorMsg
//                 ? "bg-Lightgrey text-mainRed border border-mainRed px-4 py-3 mt-2 rounded-xl relative flex items-center gap-2 font-semibold"
//                 : "offscreen"
//             }
//             aria-live="assertive"
//             role="alert"
//           >
//             {errorMsg ? <FaTimes /> : ""}
//             {errorMsg}
//           </p>

//           <div className="flex flex-col ss:flex-row sm:items-center gap-3 bg-mainWhite rounded-2xl px-3 py-2 w-full ">
//             <label className="font-semibold w-[25%] ">FullName :</label>
//             <input
//               type="text"
//               placeholder="Enter your firstname and lastname"
//               required
//               onChange={handleChange}
//               name="displayName"
//               value={displayName}
//               className="rounded-2xl ss:px-3 sm:py-1  px-2 py-2  bg-greyEight ss:w-[70%]"
//             />
//           </div>

//           <div className="flex flex-col ss:flex-row sm:items-center gap-3 bg-mainWhite rounded-2xl px-3 py-2 w-full">
//             <label className="font-semibold w-[25%] ">Email :</label>
//             <input
//               type="email"
//               placeholder="kabbs123@gmail.com"
//               required
//               onChange={handleChange}
//               name="email"
//               value={email}
//               className="rounded-2xl ss:px-3 sm:py-1  px-2 py-2  bg-greyEight ss:w-[70%]"
//             />
//           </div>

//           <div className="flex flex-col ss:flex-row sm:items-center gap-3 bg-mainWhite rounded-2xl px-3 py-2 w-full">
//             <label className="font-semibold w-[25%]">Password :</label>
//             <input
//               type="password"
//               placeholder="enter your password"
//               required
//               onChange={handleChange}
//               name="password"
//               value={password}
//               className="rounded-2xl ss:px-3 sm:py-1  px-2 py-2  bg-greyEight ss:w-[70%]"
//             />
//           </div>

//           <div className="flex flex-col ss:flex-row sm:items-center gap-3 bg-mainWhite rounded-2xl px-3 py-2 w-full">
//             <label className="font-semibold w-[25%] ">Confirm Password:</label>
//             <input
//               type="password"
//               placeholder="Confirm password"
//               required
//               onChange={handleChange}
//               name="confirmPassword"
//               value={confirmPassword}
//               className="rounded-2xl ss:px-3 sm:py-1  px-2 py-2  bg-greyEight ss:w-[70%]"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-secondary text-mainWhite w-32 mx-auto mt-8 py-2 rounded-2xl flex flex-col justify-center items-center"
//           >
//             Sign Up{" "}
//             {isLoading ? (
//               <ReactLoading
//                 type={"spin"}
//                 color={"#fff"}
//                 height={20}
//                 width={20}
//                 className="mt-1"
//               />
//             ) : (
//               ""
//             )}
//           </button>
//         </form>

//         <div className="mx-auto">
//           <h2 className="my-2 text-[13px]">
//             Already have an account?{" "}
//             <span className="font-bold text-secondary">
//               <Link to={"/sign-in"}>Sign In</Link>
//             </span>
//           </h2>

//           <p className="text-[12px]">
//             By proceeding, you consent to get calls, WhatsApp or SMS messages,
//             including by automated means, from Uber and its affiliates to the
//             number provided.
//           </p>
//         </div>
//       </div>

//       <p className="text-[11px] text-center my-6">
//         Copyright &copy; 2023 Kabbs Universal. All Rights Reserved
//       </p>
//     </div>
