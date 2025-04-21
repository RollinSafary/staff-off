import React from "react";
import TeamTableContent from "./components/TeamTableContent";
import TeamOverviewHeader from "./components/TeamOverviewHeader";
import Legend from "./components/Legend";
const TeamOverviewContent = () => {
  return (
    <>
      <TeamOverviewHeader />
      <Legend />
      <TeamTableContent />
    </>
  );
};
export default TeamOverviewContent;
