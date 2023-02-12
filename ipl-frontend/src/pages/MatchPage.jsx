import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";

import { YearSelector } from "../components/YearSelector";

import "./MatchPage.css";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      setMatches(data);
    };
    fetchMatches();
  }, [teamName, year]);

  const EmptyCard = () => <div>No data found</div>;

  return (
    <div className="matchPage">
      <div className="year-selector">
        <h3> Select Year </h3>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <h1 className="page-heading">
          {teamName} matches in {year}
        </h1>
        {matches.length > 0 ? (
          matches.map((match) => {
            return (
              <MatchDetailCard
                key={match.id}
                teamName={teamName}
                match={match}
              />
            );
          })
        ) : (
          <EmptyCard />
        )}
      </div>
    </div>
  );
};
