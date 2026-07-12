import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {
  const { students, addFavourite, isFavourite } =
    useContext(StudentContext);

  return (
    <section>
      <div className="section-head">
        <h2>Student List</h2>
        <span>{students.length} students</span>
      </div>

      <div className="card-grid">
        {students.map((student) => {
          const added = isFavourite(student.rollNumber);

          return (
            <div className="student-card" key={student.rollNumber}>
              <p className="student-card__roll">
                {student.rollNumber}
              </p>

              <h3>{student.name}</h3>

              <p className="student-card__meta">
                {student.section} - {student.subject}
              </p>

              <button
                className={added ? "btn btn--added" : "btn"}
                onClick={() => addFavourite(student)}
                disabled={added}
              >
                {added ? "Added to Favourite" : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StudentList;