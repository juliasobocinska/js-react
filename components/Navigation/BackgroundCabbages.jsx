import React from "react";
import styles from "./BackgroundCabbage.module.css";

export default function BackgroundCabbages({ isLoggedIn }) {
    return (
        <div className={`${styles.cabbageContainer} ${isLoggedIn ? styles.moveDown : ""}`}>
            <div className={styles.cabbage1}></div>
            <div className={styles.cabbage2}></div>
            <div className={styles.cabbage3}></div>
            <div className={styles.cabbage4}></div>
            <div className={styles.cabbage5}></div>
            <div className={styles.cabbage6}></div>
            <div className={styles.cabbage7}></div>
            <div className={styles.cabbage8}></div>
            <div className={styles.cabbage9}></div>
            <div className={styles.cabbage10}></div>
            <div className={styles.cabbage11}></div>
            <div className={styles.cabbage12}></div>
            <div className={styles.cabbage13}></div>
            <div className={styles.cabbage14}></div>

            <div className={styles.cabbages}></div>
        </div>
    );
}
