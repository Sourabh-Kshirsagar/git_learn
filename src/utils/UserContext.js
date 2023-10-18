import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@yahoo.com",
  },
});

UserContext.displayName = "UserContext";
export default UserContext;
