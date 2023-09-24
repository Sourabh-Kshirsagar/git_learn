import { useRouteError } from "react-router-dom";
// This is the Hook given by reactRouterDom to get the status of the Error that we get

const Error = () => {
  const err = useRouteError();
  //   The Hook gives an object of the Error we have to use this object to show the error accordingly
  return (
    <>
      <h2>Oops!!</h2>
      <h3>
        {" "}
        This is an Error to the console page.{" "}
        {err.status + " " + err.statusText}{" "}
      </h3>
    </>
  );
};
export default Error;
