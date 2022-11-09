import React from "react";
import { useState } from "react";
import styles from "./PatientTab.module.scss"

const PatientTab = (props) => {

    const [isActive, setIsActive] = useState(false);

    const activeTab = () => {
        setIsActive(current => !current);
    }

    let bg = "rgb(250, 84, 84)"
    let glow = "0px 0px 15px 0px rgb(247, 43, 43)"
    let border = "solid 2px rgb(250, 84, 84)"

    return(<div className={styles.mainBox} onClick={activeTab} style={{
        order: isActive ? '0' : '1'
    }}>
        <div className={styles.blockLeft} style={{
            backgroundColor: isActive ? bg : '',
            boxShadow: isActive ? glow : '',
        }}></div>
        <div className={styles.content} style={{
            border: isActive ? border : '',
            boxShadow: isActive ? glow : '',
        }}>//Patient: {props.name}</div>
        <div className={styles.blockRight} style={{
            backgroundColor: isActive ? bg : '',
            boxShadow: isActive ? glow : '',
        }}></div>
    </div>)
}
export default PatientTab;