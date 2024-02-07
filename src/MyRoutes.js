import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './app/App';
import SudokuPage from './sudoku/SudokuPage'
import MyHTML from "./portfolioProject/MyHTML";


export const MyRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />}/> 
                <Route path="/home" element={<App />}/>
                <Route path="/sudoku" element={<SudokuPage />} />
                <Route path="/portfolioProject" element={<MyHTML />} />
            </Routes>
        </Router>
    )
}