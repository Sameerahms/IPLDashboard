package com.hms.ipldashboard.repository;

import com.hms.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {
  Team findByTeamName(String teamName);
}
