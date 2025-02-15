import React from 'react';
import styles from "../Navigation/Navigation.module.css"; 
import { useNavigate } from 'react-router-dom';

const Navigation = ({ userName, onLogout }) => {
  const navigate = useNavigate();

  // Funkcja obsługująca logikę wylogowania
  const handleLogout = () => {
    // Usuwamy dane z localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");

    if (onLogout) onLogout(); 

    // Przekierowujemy użytkownika na stronę logowania
    navigate("/login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Survivor</div> 

      {/* userInfo pojawia się tylko jeśli userName istnieje */}
      {userName && (
        <div className={styles.userInfo}>
          <span className={styles.userLogo}>U</span>
          <span className={styles.userName}>{userName}</span>
          <span className={styles.line}>|</span>
          <div onClick={handleLogout} className={styles.logout}>
            Exit
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
