import React from "react";
import FooterComponent from "../../components/FooterComponent/Footer.component";
import NavigationComponent from "../../components/NavigationComponent/NavigationComponent";
import styles from "./Landing.module.scss"

const Landing = () => {
    return (
        <div className={styles.backGlow}>
            <NavigationComponent />
            <div className={styles.topBox}>
            </div>
            <div className={styles.container}>
            </div>
            <FooterComponent />
        </div>)
}

export default Landing;