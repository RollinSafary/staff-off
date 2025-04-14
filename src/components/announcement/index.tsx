import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./announcementHeader";
import BroadcastButton from "./components/broadcastButton";
import CompanyMessage from "./components/CompanyMessage";
import TargetSelector from "./components/TargetSelector";

const locationOptions: string[] = ["Yerevan", "London", "Moscow"];
const teamOptions: string[] = ["Development", "Design", "HR"];

const AnnouncementComponent: React.FC = () => {
  const [target, setTarget] = useState<"all" | "location" | "team">("all");
  const [locations, setLocations] = useState<string[]>([]);
  const [teams, setTeams] = useState<string[]>([]);

  return (
    <>
      <Header />
      <section>
        <Box
          p={4}
          sx={{
            maxWidth: 700,
            boxShadow: 3,
            borderRadius: 3,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <CompanyMessage />
          <TargetSelector
            target={target}
            setTarget={setTarget}
            locations={locations}
            setLocations={setLocations}
            teams={teams}
            setTeams={setTeams}
            locationOptions={locationOptions}
            teamOptions={teamOptions}
          />
          <BroadcastButton />
        </Box>
      </section>
    </>
  );
};
export default AnnouncementComponent;
