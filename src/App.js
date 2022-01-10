import './styles/App.css';
import './styles/App.scss';

import React from 'react';

import {
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

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
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Outlet />
    </Container>
  );
}