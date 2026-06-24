import { Link } from "react-router-dom";
import { FiArrowRight, FiSearch } from "react-icons/fi";

const Home = () => {
  return (
    <div className="page animate-fade-in">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", padding: "4rem 0" }}>
          <h1 style={{ fontSize: "4rem", fontWeight: "800", marginBottom: "1.5rem", lineHeight: "1.2" }}>
            Find Your Next <span className="text-gradient">Dream Job</span> Today
          </h1>
          <p style={{ fontSize: "1.25rem", color: "var(--text-muted)", marginBottom: "3rem" }}>
            Discover opportunities at the world's most innovative companies. 
            Join our platform to accelerate your career growth.
          </p>
          
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "4rem" }}>
            <Link to="/jobs" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
              <FiSearch /> Browse Jobs
            </Link>
            <Link to="/register" className="btn btn-secondary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
              Post a Job <FiArrowRight />
            </Link>
          </div>

          <div className="glass" style={{ padding: "2rem", borderRadius: "1rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            <div>
              <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--primary-color)" }}>10k+</h3>
              <p style={{ color: "var(--text-muted)" }}>Active Jobs</p>
            </div>
            <div>
              <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--secondary-color)" }}>5k+</h3>
              <p style={{ color: "var(--text-muted)" }}>Companies</p>
            </div>
            <div>
              <h3 style={{ fontSize: "2rem", fontWeight: "700", color: "var(--primary-color)" }}>2M+</h3>
              <p style={{ color: "var(--text-muted)" }}>Candidates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
