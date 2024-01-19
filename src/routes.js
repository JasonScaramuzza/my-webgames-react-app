import {Routes, Route } from 'react-router-dom';
import App from './app/App';
import SudukoPage from './suduko/SudukoPage'

function routes() {
    return (
        <Routes>
            <Route exact path="/" element={<App />}/> 
            <Route exact path="/home" element={<App />}/> 
            <Route exact path="/suduko" element={<SudukoPage />} />
        </Routes>
    );
  }
  
export default routes;