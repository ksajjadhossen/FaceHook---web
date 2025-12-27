import { Link } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const { auth } = useAuth();
  console.log("auth is here", auth);
  return (
    <div className="">
      <h1>Here is HomePage page</h1>
      <Link to="/me">go to profile</Link>
    </div>
  );
}
