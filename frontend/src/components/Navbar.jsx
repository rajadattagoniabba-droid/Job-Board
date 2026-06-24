import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FiBriefcase, FiUser, FiLogOut, FiHome, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar glass">
      <div className="container" style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
          <FiBriefcase className="text-gradient" />
          <span className="text-gradient">NovaJobs</span>
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link"><FiHome /> Home</Link>
          <Link to="/jobs" className="nav-link"><FiSearch /> Jobs</Link>
          
          {user ? (
            <>
              {user.role === "employer" ? (
                <Link to="/employer" className="nav-link"><FiUser /> Dashboard</Link>
              ) : (
                <Link to="/candidate" className="nav-link"><FiUser /> Profile</Link>
              )}
              <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>
                <FiLogOut /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
