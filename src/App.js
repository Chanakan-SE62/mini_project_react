import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile/:id" element={<Profile/>} />
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
