import React from "react";
import NavigationComponent from "../../components/NavigationComponent/NavigationComponent";
import styles from "./Admin.module.scss"

const Admin = () => {
    return(<div className={styles.backGlow}>
        <NavigationComponent />
    </div>)
}

export default Admin;