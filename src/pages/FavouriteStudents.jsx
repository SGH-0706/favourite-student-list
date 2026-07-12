import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <section>
      <div className="section-head">
        <h2>Favourite Students</h2>
        <span>{favourites.length} students</span>
      </div>

      {favourites.length === 0 ? (
        <div className="empty-state">
          <p>No favourite students added yet.</p>

          <Link to="/" className="btn">
            Go to Student List
          </Link>
        </div>
      ) : (
        <div className="favourite-list">
          {favourites.map((student) => (
            <div className="favourite-row" key={student.rollNumber}>
              <span>{student.rollNumber}</span>

              <span className="favourite-row__name">
                {student.name}
              </span>

              <span className="favourite-row__meta">
                {student.section} - {student.subject}
              </span>

              <button
                className="btn btn--remove"
                onClick={() => removeFavourite(student.rollNumber)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default FavouriteStudents;