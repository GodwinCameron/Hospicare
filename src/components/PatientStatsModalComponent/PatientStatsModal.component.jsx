import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from './PatientStatsModal.module.scss'


const PatientStatsModal = () => {

    const [heartRate, setHeartRate] = useState(Math.round((Math.random() * (98 - 50) + 50)));

    useEffect(
        () => {
            let timer1 = setTimeout(() => setHeartRate(prevState => {
                let fluxuation = Math.round((Math.random() * (3 - (-3)) + (-3)));
                if (fluxuation == 0) { fluxuation = -1; }
                return prevState + fluxuation
            }), 1500);
            return () => { clearTimeout(timer1); };

        }, [heartRate]);

    if (heartRate >= 190) {
        setHeartRate(120)
    } else if (heartRate <= 50) {
        setHeartRate(60)
    }

    // placeholders: 
    const patientId = 1;
    const patientName = "JASON";
    const patientSurname = "BORNE";
    const patientAge = 26;
    const patientSex = "MALE";
    const clientType = "PLATINUM";
    const patientIncome = "$26,000.00";


    return (
        <div className={styles.main}>
            <div className={styles.headerContent}>
                <div className={styles.profileCharacter}>
                    <div className={styles.border}>
                        <div className={`${styles.profileIcon} ${styles.img}`}></div>
                    </div>
                    <div className={styles.qrTag}></div>
                </div>
                <div className={`${styles.headerStats} ${styles.text1}`}>
                    <p>PATIENT ID-......................................{patientId}</p>
                    <p>NAME-........................................{patientName}</p>
                    <p>SURNAME-.....................................{patientSurname}</p>
                    <p>AGE-............................................{patientAge}</p>
                    <p>SEX-..........................................{patientSex}</p>
                    <p>CLIENT TYPE-..............................{clientType}</p>
                    <p>AVG. INCOME-............................{patientIncome}</p>
                </div>
                <div className={styles.patientValue}>
                    <div className={styles.patientStatus}>
                        <div className={styles.statusDetail}></div>
                        <h6>Patient Status: Healthy</h6>
                    </div>
                    <div className={styles.clientValue}>Client Value:</div>
                    <div className={styles.value}>VALUABLE!</div>
                </div>
            </div>

            <div className={styles.actions}>
                <div className={styles.divider}>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <div className={styles.actionItem}></div>
                            <div className={styles.actionItem}></div>
                            <div className={styles.actionItem}></div>
                            <div className={styles.actionItem}></div>
                        </div>
                        <div className={styles.right}>
                            <h4 className={styles.text1}>VITALS MONITOR:</h4>
                            <div className={`${styles.barcode} ${styles.img}`}></div>
                            <div className={`${styles.xray} ${styles.img}`}>
                                <div className={styles.bpm}> BPM: {heartRate}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientStatsModal;