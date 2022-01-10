import React, { useState } from 'react';
import axios from 'axios';
import {
    useLocation,
    Navigate
} from 'react-router-dom';
import { API_URL } from '../config/config';

let AuthContext = React.createContext(null);

export default function AuthProvider({ children }) {
    let [user, setUser] = useState(null);
  
    let signup = (formValues, callback) => {
        return authProvider.signup(formValues, () => {
            setUser(formValues.username);
            callback();
        });
    };

    let signin = (formValues, callback) => {
        return authProvider.signin(formValues, () => {
            setUser(formValues.emailOrUsername);
            callback();
        });
    };

    let signout = (callback) => {
        return authProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signup, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Returns headers with JWT auth token
function getAuthHeaders() {
    return {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
}

// authProvider
const authProvider = {
    isAuthenticated: false,
    signup(formValues, callback) {
        axios.post(API_URL+'/users', {user: formValues})
        .then(res => {
            const parseRes = res.data;
            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                alert("Logged In!");
            }
        })
        .catch(err => {
            console.log(err);
        });
        authProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signin(formValues, callback) {
        axios.post(API_URL+'/login', formValues)
        .then(res => {
            const parseRes = res.data;
            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                alert("Logged In!");
            }
        })
        .catch(err => {
            console.log(err);
        });
        authProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        authProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    }
}

function useAuth() {
    return React.useContext(AuthContext);
}

function AuthRoute({ children }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export { getAuthHeaders, authProvider, useAuth, AuthRoute }