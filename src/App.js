import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Account/Login'));
const Signup = lazy(() => import('./pages/Account/Signup'));

const App = () => (
  <>
  <div className="mainContent">
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </Suspense>
    </Router>
  </div>
  </>
);

export default App;
