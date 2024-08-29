"use client"; 
import { Provider } from 'react-redux';
import { store } from '../ui/dashboard/leads/redux/store';
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Footer from "../ui/dashboard/footer/footer";
import styles from "../ui/dashboard/dashboard.module.css";


const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Navbar />
          {children}
        </div>
        <div className={styles.bottomcontent}>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default Layout;
