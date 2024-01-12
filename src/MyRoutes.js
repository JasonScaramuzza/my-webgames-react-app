import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './app/App';
import SudukoPage from './suduko/SudukoPage'


export const MyRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />}/> 
                <Route path="/home" element={<App />}/> 
                <Route path="/suduko" element={<SudukoPage />} />
            </Routes>
        </Router>
    )
}