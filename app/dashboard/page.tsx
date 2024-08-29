import styles from "../ui/dashboard/dashboard.module.css";
import Leads from "../ui/dashboard/leads/components/leads";

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Leads />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
