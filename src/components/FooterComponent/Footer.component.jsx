import React from "react";
import styles from "./Footer.module.scss";

const FooterComponent = () => {
    return(<div className={styles.footer}>
        <div className={styles.footerSpacer}></div>
        <div className={styles.footerLogo}></div>
    </div>)
}

export default FooterComponent;