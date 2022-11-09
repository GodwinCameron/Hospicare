import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './NavigationComponent.module.scss'

const NavigationComponent = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/')
    };
    const navigatePatients = () => {
        navigate('/patients')
    };
    const navigateAdmin = () => {
        navigate('/admin')
    };

    return (<>
        <div className={styles.main}>
            <div className={styles.topBox}>
                <div className={styles.logo}></div>
                <div className={styles.navSpacer}></div>
            </div>
            <div className={styles.detailTop}></div>
            <div className={styles.detailLeft}></div>
            <div className={styles.detailRight}></div>
            <div className={styles.detailBottom}></div>
            <div className={styles.nav}>
                <div id="navHome" onClick={navigateHome} className={styles.navTab}> //: Home </div>
                <div id="navPatient" onClick={navigatePatients} className={styles.navTab}> //: Patients </div>
                <div id="navAdmin" onClick={navigateAdmin} className={styles.navTab}> //: Admin </div>
            </div>
        </div>
    </>)
}

export default NavigationComponent;