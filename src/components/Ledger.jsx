import { NavLink } from "react-router-dom";

function Ledger() {
  return (
    <header className="ledger">
      <div className="ledger__title">
        <span className="ledger__mark">✎</span>

        <div>
          <h1>Class Register</h1>
          <p>Favourite Student List</p>
        </div>
      </div>

      <nav className="ledger__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          Roster
        </NavLink>

        <NavLink
          to="/favourites"
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          Favourites
        </NavLink>
      </nav>
    </header>
  );
}

export default Ledger;