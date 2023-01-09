import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLogged: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const initToken = localStorage.getItem("token");
    const [token, setToken] = useState(initToken);
    const userIsLoggedIn = !!token;

    const calculateRemainingTime = (expirationTime) => {
        const currentTime = new Date().getTime();
        const adjExperationTime = new Date(expirationTime).getTime();

        const remainingTime = adjExperationTime - currentTime;

        return remainingTime;
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem("item");
    };

    const loginHandler = (token, expirationDate) => {
        setToken(token);
        localStorage.setItem("token", token);

        const remainingTime = calculateRemainingTime(expirationDate);

        setTimeout(logoutHandler, remainingTime);
    };
    const authValue = {
        token: token,
        isLogged: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={authValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;