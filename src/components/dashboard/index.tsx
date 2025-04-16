import Calendar from "./components/Calendar";
import RequestCards from "./components/requestCards";
import UserInfoCard from "./components/userInfoCard";
import PendingRequests from "./components/pendingRequests";
import DashboardSection from "./components/Section";
import LeftPart from "./components/LeftPart";
import { useTranslation } from "react-i18next";
import { Translations } from "@/constants/translations";

const DashboardContent = () => {
  const { t } = useTranslation();
  return (
    <>
      <header>
        <h1> {t(Translations.PAGE_DASHBOARD_GREETING)}</h1>
      </header>
      <DashboardSection>
        <LeftPart>
          <RequestCards />
          <Calendar />
        </LeftPart>
        <div>
          <UserInfoCard />
          <PendingRequests />
        </div>
      </DashboardSection>
    </>
  );
};
export default DashboardContent;
