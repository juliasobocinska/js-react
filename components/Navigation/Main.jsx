import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../Navigation/Main.module.css";
import Background from "../Background";
import Navigation from "../Navigation/Navigation"; 

const Main = ({ isLoginPage }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    
    // Pobieramy użytkownika z localStorage
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className={styles.background}> {/* Tło pozostaje to samo */}
            {/* Navigation pokazuje się, jeśli użytkownik jest zalogowany */}
            {!isHomePage && !isLoginPage && user && (
                <Navigation 
                    userName={user.name} 
                    onLogout={handleLogout} 
                />
            )}

            {/* Tytuł "Survivors" tylko na stronie logowania */}
            {!user && isLoginPage && (
                <div className={styles.header}>
                    <div className={styles.logo}>Survivors</div>
                </div>
            )}

            {/* Kapusty zawsze są na stronie, ale po zalogowaniu na dole */}
            <Background isLoggedIn={!!user} />
        </div>
    );
};

export default Main;
