package com.dell.dashboard.repository;
import com.dell.dashboard.model.UnifiedDataScanner;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UnifiedDataRepository extends MongoRepository<UnifiedDataScanner, String> {

    Optional<UnifiedDataScanner> findByBuildNumber(String buildNumber);

}