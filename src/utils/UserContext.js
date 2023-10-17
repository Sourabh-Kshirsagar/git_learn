import { createContext } from "react";

// in this way we create context and give the values that we should use everywhere in app
const UserContext = createContext({
  user: {
    // data to be passed from the UserContext
    name: "Dummy Name",
    email: "dummy@yahoo.com",
  },
});

// In this way we define the name for the UserContext which will show in the React Developer tool
UserContext.displayName = "UserContext";
export default UserContext;
