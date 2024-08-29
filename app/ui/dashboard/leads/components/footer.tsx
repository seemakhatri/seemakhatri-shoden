import React from 'react';
import styles from '../styles/leads.module.css';

interface FooterProps {
    onContinue: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContinue }) => {
    return (
        <footer className={styles.footer}>
            <button className={styles["continue-button"]} onClick={onContinue}>
                Continue
            </button>
        </footer>
    );
};

export default Footer;
