import { React, useEffect, useState } from "react";

import "./HomePage.css";
import TeamTile from "../components/TeamTile";

export const HomePage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchAllTeams = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team`
      );
      const data = await response.json();
      setTeams(data);
    };
    fetchAllTeams();
  }, []);

  return (
    <div className="app-container">
      <div className="team-list-items">
        {teams.map((team) => (
          <TeamTile key={team.id} teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
};
