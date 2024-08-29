import React from 'react';
import styles from '../styles/leads.module.css';

const ValidationComponent = () => {
    return (
        <div className={styles["validation-card"]}>
            <h3>Validation Step</h3>
            <p>Validate and correct the uploaded data.</p>
        </div>
    );
};

export default ValidationComponent;
