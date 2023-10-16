import { createContext } from "react";

// in this way we create context and give the values that we should use everywhere in app
const UserContext = createContext({
  user: {
    // data to be passed from the UserContext
    name: "Dummy Name",
    email: "dummy@yahoo.com",
  },
});

export default UserContext;
