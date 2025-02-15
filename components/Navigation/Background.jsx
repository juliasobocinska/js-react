import React from "react";
import styles from "./Background.module.css";
import BackgroundCabbages from "./BackgroundCabbages";

const Background = ({ isLoginPage, isLoggedIn }) => {
	return (
		<>
			{/* Górne kapusty, które przesuwają się w dół po zalogowaniu */}
			<div className={`${styles.cabbageBackground} ${isLoggedIn ? styles.moveDown : ""}`}>
				{isLoginPage && <BackgroundCabbages />}
				
				{/* Tytuł "Survivors" tylko na stronie logowania */}
				{isLoginPage && (
					<div className={styles.title}>
						<p>Survivors</p>
					</div>
				)}
			</div>

			{/* Kapusty na dole - znikają po zalogowaniu */}
			<div className={`${styles.cabbageBottom} ${isLoggedIn ? styles.hidden : ""}`}></div>
		</>
	);
};

export default Background;
