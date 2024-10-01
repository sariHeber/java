package com.dell.dashboard;
import com.dell.dashboard.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
@SpringBootApplication
@EnableConfigurationProperties({AppProperties.class})
public class ScannerDataManagerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ScannerDataManagerApplication.class, args);
    }

}