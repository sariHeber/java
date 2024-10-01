package com.dell.dashboard.repository;

import com.dell.dashboard.model.SessionDetailsModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SessionDetailsRepo
        extends MongoRepository<SessionDetailsModel, String> {

     SessionDetailsModel findBySessionId(String sessionId);

}

