import Calendar from "./components/Calendar";
import React from "react";
import RequestCards from "./components/requestCards";
import UserInfoCard from "./components/userInfoCard";
import PendingRequests from "./components/pendingRequests";
import "./components/dashboard.css";

export default function dashboard() {
  return (
    <>
      <header>
        <h1>Hello, Mushegh ! 👋</h1>
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
