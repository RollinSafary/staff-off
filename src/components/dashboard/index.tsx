import Calendar from "./components/Calendar";
import RequestCards from "./components/requestCards";
import UserInfoCard from "./components/userInfoCard";
import PendingRequests from "./components/pendingRequests";
import DashboardSection from "./components/Section";
import LeftPart from "./components/LeftPart";

const Dashboard = () => {
  return (
    <>
      <header>
        <h1> hello Mushegh !</h1>
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
export default Dashboard;
