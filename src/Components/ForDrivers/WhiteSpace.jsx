

// const defaultFormFields = {
//   displayName: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

const ForDriversWhiteSpace = () => {
  // const [formFields, setFormFields] = useState(defaultFormFields);
  // const { displayName, email, password, confirmPassword } = formFields;
  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormFields({ ...formFields, [name]: value });
  // };
  return (
    <div className=" flex flex-col text-center xsm:w-[50%] pt-6 sm:w-[80%] mx-auto pb-24 my-12">
      <form>
            <div className="flex justify-between items-center">
              <label className="font-semibold w-[25%] ">FirstName :</label>
              <input
                type="text"
                placeholder="Enter your firstname"
                required
                // onChange={handleChange}
                name="displayName"
                // value={displayName}
                className="border border-lightBlue px-3 py-2 w-[70%] xsm:w-[70%] rounded-2xl ss:w-[80%] text-mainBlack"
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="font-semibold w-[25%] ">LastName :</label>
              <input
                type="text"
                placeholder="Enter your lastname"
                required
                // onChange={handleChange}
                name="displayName"
                // value={displayName}
                className="border border-lightBlue px-3 py-2 w-[70%] xsm:w-[70%] rounded-2xl ss:w-[80%] text-mainBlack"
              />
            </div>

            <div className="flex justify-between items-center ">
              <label className="font-semibold w-[25%]">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                // onChange={handleChange}
                name="email"
                // value={email}
                className="border border-lightBlue px-3 py-2 w-[70%] xsm:w-[70%] rounded-2xl ss:w-[80%] text-mainBlack"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="font-semibold w-[25%]">Password :</label>
              <input
                type="password"
                placeholder="enter your password"
                required
                // onChange={handleChange}
                name="password"
                // value={password}
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
                // onChange={handleChange}
                name="confirmPassword"
                // value={confirmPassword}
                className="border border-lightBlue px-3 py-2 w-[70%] xsm:w-[70%] rounded-2xl ss:w-[80%]"
              />
            </div>
            <button
              type="submit"
              className="bg-secondary text-mainWhite w-full mx-auto mt-8 py-2 rounded-2xl flex flex-col justify-center items-center"
            >
              Sign Up{" "}
              {/* {isLoading ? (
                <ReactLoading
                  type={"spin"}
                  color={"#fff"}
                  height={20}
                  width={20}
                  className="mt-1"
                />
              ) : (
                ""
              )} */}
            </button>
        </form>
    </div>
  );
};

export default ForDriversWhiteSpace;