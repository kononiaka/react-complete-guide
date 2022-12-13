import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => { },
    onLogout: () => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        localStorage.removeItem("LoggedIn");

        setIsLoggedIn(false);
    };

    const loginHanlder = (email, password) => {
        localStorage.setItem("LoggedIn", "1");

        setIsLoggedIn(true);
    };

    useEffect(() => {
        const logUserIn = localStorage.getItem("LoggedIn");

        if (logUserIn === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHanlder }}> {props.children}</AuthContext.Provider >
    );
};

export default AuthContext;