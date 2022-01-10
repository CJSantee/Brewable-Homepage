import React from 'react';

import {
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Privacy from './pages/Privacy';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Users from './pages/Users';
import AuthProvider, { AuthRoute } from './utils/Auth';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route 
            path="/users" 
            element={
              <AuthRoute>
                <Users />
              </AuthRoute>
            }/>
          <Route path="/privacy" element={<Privacy />}/>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer /> 
    </div>
  );
}