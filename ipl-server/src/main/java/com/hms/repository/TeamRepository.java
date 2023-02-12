package com.hms.repository;

import com.hms.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository <Team, Long> {

    Team findByTeamName(String teamName);
}
