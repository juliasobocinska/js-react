import React from "react";
import styles from "./Background.module.css";
import BackgroundCabbages from "./BackgroundCabbages";

const Background = ({ isLoginPage }) => {
	return (
		<>
			<div className={styles.cabbageBackground}>
				{isLoginPage && <BackgroundCabbages />}
        <div className={styles.title}>
          <p>Survivors</p>
        </div>
			</div>

			{isLoginPage && <div className={styles.cabbage}></div>}

			{!isLoginPage && (
				<div className={styles.cabbageContainer}>
					<BackgroundCabbages />
				</div>
			)}

			<div className={styles.cabbageBottom}></div>
		</>
	)
}

export default Background;
