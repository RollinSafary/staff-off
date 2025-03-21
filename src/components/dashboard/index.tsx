import Calendar from "./components/Calendar";
import RequestCards from "./components/requestCards";
import UserInfoCard from "./components/userInfoCard";
import PendingRequests from "./components/pendingRequests";
import "./components/dashboard.css";
import { useTranslation } from "react-i18next";
export default function dashboard() {
  const { t } = useTranslation();
  return (
    <>
      <header>
        <h1> {t("hello")}, Mushegh ! 👋</h1>
      </header>
      <section className="dashboard-section">
        <div className="right-part">
          <RequestCards />
          <Calendar />
        </div>
        <div className="left-part">
          <UserInfoCard />
          <PendingRequests />
        </div>
      </section>
    </>
  );
}
