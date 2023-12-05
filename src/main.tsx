import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from "./error-page";
import Login from './routes/login';
import Navbar from './components/navbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Root/>}></Route>
          <Route path='home' element={<Root/>}></Route>
        </Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
