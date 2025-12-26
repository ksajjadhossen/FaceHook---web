import { useNavigate } from "react-router-dom";
import logout from "../../assets/icons/logout.svg";
export default function LogOut() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogOut}>
      <img src={logout} alt="Logout" />
    </button>
  );
}
