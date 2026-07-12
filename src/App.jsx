import { Routes, Route } from "react-router-dom";
import StudentProvider from "./context/StudentContext";
import Ledger from "./components/Ledger";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

function App() {
  return (
    <StudentProvider>
      <div className="page">
        <Ledger />

        <main className="page__content">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route
              path="/favourites"
              element={<FavouriteStudents />}
            />
          </Routes>
        </main>
      </div>
    </StudentProvider>
  );
}

export default App;