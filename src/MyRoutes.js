import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./pageMain/App";
import AboutPage from "./pageAbout/AboutPage";
import ProjectsPage from "./pageProjects/ProjectsPage";
import SudokuPage from "./projects/sudoku/SudokuPage";
import PetAdoptionPage from "./projects/petAdoption/PetAdoptionPage";
import Details from "./projects/petAdoption/Details";
import LoginPage from "./projects/loginForm/LoginPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

export const MyRoutes = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/sudoku" element={<SudokuPage />} />
          <Route path="/pet-adoption" element={<PetAdoptionPage />} />
          <Route path="/pet-adoption/details/:id" element={<Details />} />
          <Route path="/login-form-with-unit-tests" element={<LoginPage />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
};
