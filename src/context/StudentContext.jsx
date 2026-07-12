import { createContext, useState } from "react";
import students from "../data/students";

export const StudentContext = createContext();

function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    const alreadyAdded = favourites.some(
      (item) => item.rollNumber === student.rollNumber
    );

    if (!alreadyAdded) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFavourite = (rollNumber) => {
    const updatedFavourites = favourites.filter(
      (student) => student.rollNumber !== rollNumber
    );

    setFavourites(updatedFavourites);
  };

  const isFavourite = (rollNumber) => {
    return favourites.some(
      (student) => student.rollNumber === rollNumber
    );
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;