import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./pageMain/App";
import AboutPage from "./pageAbout/AboutPage";
import SudokuPage from "./projects/sudoku/SudokuPage";
import PetAdoptionPage from "./projects/petAdoption/PetAdoptionPage";
import Details from "./projects/petAdoption/Details";

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
          <Route path="/sudoku" element={<SudokuPage />} />
          <Route path="/pet-adoption" element={<PetAdoptionPage />} />
          <Route path="/pet-adoption/details/:id" element={<Details />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
};
