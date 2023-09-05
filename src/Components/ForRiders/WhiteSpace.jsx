const WhiteSpace = () => {
  return (
    <div className=" flex flex-col text-center xsm:w-[50%] pt-6 sm:w-[80%] mx-auto pb-24 my-12">
      

      <div className="flex items-center justify-center my-8 gap-4 ">
        <div>
          <h2 className="font-medium  my-4 text-4xl">Open the KABBS App</h2>
          <li>
            Download and install the KABBS app if you haven't already.
          </li>
          <li>
            Sign in or create an account.
          </li>
        </div>
      </div>

      <div className="flex items-center justify-center my-8 gap-4">
        <div>
          <h2 className="font-medium my-4 text-4xl">Set Your Pickup and Destination</h2>
          <li>
            Enter your pickup location and destination in the app.
          </li>
          <li>
            Choose your ride option and confirm the booking.
          </li>
        </div>
      </div>

      <div className="flex items-center justify-center my-8 gap-4">
        <div>
          <h2 className="font-medium my-4 text-4xl">Track and Enjoy Your Ride</h2>
          <li>
            Track your driver's arrival on the map.
          </li>
          <li>
            Pay automatically through the app after the ride, and rate your driver.
          </li>
        </div>
      </div>
    </div>
  );
};

export default WhiteSpace;