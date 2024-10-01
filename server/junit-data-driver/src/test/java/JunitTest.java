import com.dell.dashboard.junit.model.Testsuite;
import com.dell.dashboard.junit.service.JunitDataDriverHandlerService;
import com.dell.dashboard.model.UnifiedDataScanner;
import com.dell.dashboard.service.ifc.DataDriverHandlerServiceIfc;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
@ExtendWith({MockitoExtension.class, UnifiedDataResolver.class, JunitScannerModeResolver.class})
@Slf4j

public class JunitTest {
    @InjectMocks
    JunitDataDriverHandlerService ServiceJunit;

    @Test
    @DisplayName("AggrigationToUnifiedDataJunitScanner")
    public void AggrigationOnJunitScanner_whenAggrigationFailed_withUnValidScanner(UnifiedDataScanner unifiedDataScanner, Testsuite junitFile){
        ServiceJunit.aggregateJunitToUnifedData(junitFile, unifiedDataScanner);
        Assertions.assertEquals(4, unifiedDataScanner.getNumberOfScans());
        Assertions.assertEquals(3,unifiedDataScanner.getNumberOfScans()-unifiedDataScanner.getNumberOfSuccessfulScans());
        Assertions.assertEquals(1, unifiedDataScanner.getNumberOfSuccessfulScans());
    }
}
