import { React } from "react";
import { Link } from "react-router-dom";

import "./TeamTile.css";

const TeamTile = ({ teamName }) => {
  const logoName = teamName.split(" ")[0];

  return (
    <Link to={`/teams/${teamName}`} className="link-item">
      <li className="team-card">
        <img className="team-card-image" src={`images/${logoName}.png`} alt={logoName} />
        <p className="team-card-name">{teamName}</p>
      </li>
    </Link>
  );
};

export default TeamTile;
