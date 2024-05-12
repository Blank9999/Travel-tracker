import { Outlet } from "react-router-dom";
import AppnNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppnNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by TravelTracker.
        </p>
      </footer>
    </div>
  );
}
