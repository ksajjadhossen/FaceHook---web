import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";

export const useAuth = () => {
  const context = useContext(AuthContext);

  // Debugging label for React DevTools
  useDebugValue(context.auth, (auth) =>
    auth?.user ? "User Logged In" : "User Logged Out"
  );

  return context;
};
