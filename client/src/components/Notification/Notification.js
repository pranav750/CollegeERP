import Loading from "./Loading";
import Success from "./Success";
import Error from "./Error";
import Information from "./Information";
import Delete from "./Delete";

const Notification = () => {
  return (
    <div>
      <Loading />
      <Success />
      <Error />
      <Information />
      <Delete />
    </div>
  );
};

export default Notification;
