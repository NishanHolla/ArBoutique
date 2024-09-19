import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from "./error-page";
import Login from './routes/login';
import MainPage from './components/products/mainpage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Root Route */}
        <Route path="/" element={<Root />} />
        
        {/* Home Route */}
        <Route path="/home" element={<Root />} />
        
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Products Route */}
        <Route path="/products" element={<MainPage />} />
        
        {/* Error Route for any undefined paths */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
