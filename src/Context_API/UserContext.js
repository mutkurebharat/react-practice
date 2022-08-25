import React from "react";

// const UserContext = React.createContext();

const UserContext = React.createContext("Code Evolution");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext; // for 2nd way to implement context
