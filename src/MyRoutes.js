import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pageMain/App";
import AboutPage from "./pageAbout/AboutPage";
import SudokuPage from "./projects/sudoku/SudokuPage";
import PetAdoptionPage from "./projects/petAdoption/PetAdoptionPage";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sudoku" element={<SudokuPage />} />
        <Route path="/pet-adoption" element={<PetAdoptionPage />} />
      </Routes>
    </Router>
  );
};
