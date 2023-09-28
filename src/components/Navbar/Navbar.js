import "./Navbar.css";
import { FaTasks } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <div className="app-logo">
          <FaTasks />
        </div>
        <p className="navbar-title">Task manager</p>
      </div>
      <div className="user-info">
        <p className="user-name">Username :- Rohan</p>
        <img
          className="user-logo"
          src="https://static.vecteezy.com/system/resources/previews/008/714/280/non_2x/cartoon-rabbit-holding-carrot-mascot-logo-design-vector.jpg"
        />
      </div>
    </div>
  );
}
