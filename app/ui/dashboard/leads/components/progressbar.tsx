import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/leads.module.css';
import { RootState } from '../redux/store';

const ProgressBar = () => {
    const activeStep = useSelector((state: RootState) => state.leads.activeStep);

    return (
        <div className={styles["progress-bar-container"]}>
            <div className={styles["progress-bar"]}>
                {[1, 2, 3, 4, 5].map((step) => (
                    <div
                        key={step}
                        className={`${styles["progress-segment"]} ${
                            step <= activeStep ? styles.active : ""
                        }`}
                    ></div>
                ))}
            </div>
            <span className={styles["step-indicator"]}>
                Step {activeStep}/5 - Validation
            </span>
        </div>
    );
};

export default ProgressBar;
