import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
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
