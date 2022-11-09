import React from "react";
import NavigationComponent from "../../components/NavigationComponent/NavigationComponent";
import PatientStatsModal from "../../components/PatientStatsModalComponent/PatientStatsModal.component";
import PatientTab from "../../components/PatientTabComponent/PatientTab.component";
import styles from "../Patients/Patient.module.scss";

const PatientRoute = () => {

    return (<>
        <div className={styles.backGlow}>
                    <NavigationComponent />
                <div className={styles.padding}>
                    <div className={styles.content}>
                        <div className={styles.leftColumn}>
                            <PatientTab name={"jeff"} />
                            <PatientTab name={"cat"} />
                            <PatientTab name={"test"} />
                            <PatientTab name={"free"} />
                            <div className={styles.arrow}>
                                <div className={styles.shape}></div>
                            </div>
                        </div>
                        <div className={styles.RightContainer}>
                            <PatientStatsModal />
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </>)
}

export default PatientRoute;