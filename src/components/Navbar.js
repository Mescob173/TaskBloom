import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>🌸 TaskBloom</h2>

      <div className="nav-links">
        <NavLink
          to="/todos"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          📝 Todos
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          ✉ Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;