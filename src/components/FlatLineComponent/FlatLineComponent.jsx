import React from "react";
import styles from "../FlatLineComponent/FlatLineComponent.module.scss"

const FlatLineComponent = () => {
    return (<>
            <div className={styles.main}>
                <div className={styles.highlight}>{">> "}System Failure--</div>
                <div className={styles.block}>
                    <h3>FLATLINED...</h3>
                    <p1 className={styles.data}> // no further data avalible...</p1>
                </div>
            </div>
    </>)
}

export default FlatLineComponent;