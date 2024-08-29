import React, { useState } from 'react';
import styles from '../styles/table.module.css';
import { FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';
import { IoIosCloseCircleOutline, IoIosPeople } from 'react-icons/io';


interface TableProps {
    data: any[];
}

const Table: React.FC<TableProps> = ({ data }) => {
    const [showInvalid, setShowInvalid] = useState(false);

    const invalidValues = data.filter(
        (row) =>
            !row["LAST NAME"] ||
            !row["COMPANY DOMAIN"] ||
            !row["LINKEDIN PROFILE URL"]
    );

    const displayedData = showInvalid ? invalidValues : data;

    return (
        <div className={styles["main-container"]}>
            <div className={styles["table-container"]}>
            <div className={styles["table-header"]}>
           <div className={styles["left"]}>
           <h3>Edit Values</h3>
           <p>Edit contacts and correct any invalid values.</p>
           </div>
               <div className={styles["right"]}>
               <div className={styles["table-controls"]}>
                    <label className={styles["toggle-switch"]}>
                        <input
                            type="checkbox"
                            checked={showInvalid}
                            onChange={() => setShowInvalid(!showInvalid)}
                        />
                        <span className={styles["slider"]}></span>
                    </label>
                    <span>Only show leads with invalid values.</span>
                    <div className={styles["summary-container"]}>
    <div className={styles["summary-item"]}>
        <IoIosCloseCircleOutline color="#E02424" />
        <span>{invalidValues.length} Invalid Values</span>
    </div>
    <div className={styles["summary-item"]}>
        <IoIosPeople color="#718096" />
        <span>{data.length} Leads Found</span>
    </div>
</div>
                </div>
               </div>
            </div>
                <table className={styles["data-table"]}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>LAST NAME</th>
                            <th>COMPANY NAME</th>
                            <th>COMPANY DOMAIN</th>
                            <th>LINKEDIN PROFILE URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData.map((row, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{row["NAME"]}</td>
                                <td
                                    className={!row["LAST NAME"] ? styles["invalid"] : ""}
                                >
                                    {row["LAST NAME"] || (
                                        <FaTimesCircle color="#E02424" />
                                    )}
                                </td>
                                <td>{row["COMPANY NAME"]}</td>
                                <td
                                    className={!row["COMPANY DOMAIN"] ? styles["invalid"] : ""}
                                >
                                    {row["COMPANY DOMAIN"] || (
                                        <FaExclamationCircle color="#E02424" />
                                    )}
                                </td>
                                <td
                                    className={!row["LINKEDIN PROFILE URL"] ? styles["invalid"] : ""}
                                >
                                    {row["LINKEDIN PROFILE URL"] || (
                                        <FaExclamationCircle color="#E02424" />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
