"use client";
import styles from "./campaign.module.css";

const Campaign = () => {
    return (
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+123456789</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>+987654321</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Campaign;
