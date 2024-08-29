"use client"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"
import { GoArrowLeft } from "react-icons/go";



const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className={styles.container}>
               <div className={styles.leftSection}>
                
                <GoArrowLeft className={styles.backArrow} />
                <h1 className={styles.heading}>Untitled</h1>
                <span className={styles.inProgress}>In Progress</span>
            </div>

            <div className={styles.rightSection}>
                <button className={styles.card1}>Rename Leads List</button>
                <button className={styles.card2}>Delete Leads List</button>
            </div>
        </div>
    )
}

export default Navbar;