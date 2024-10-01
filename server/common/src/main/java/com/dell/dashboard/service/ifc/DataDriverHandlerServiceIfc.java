package com.dell.dashboard.service.ifc;

import com.dell.dashboard.model.ScannerGroupType;
import com.dell.dashboard.model.ScannerType;
import com.dell.dashboard.model.UnifiedDataScanner;
import org.springframework.web.multipart.MultipartFile;

public interface DataDriverHandlerServiceIfc {
    public void handleAndParsingData(MultipartFile file, UnifiedDataScanner unifiedData);
    public ScannerType getScannerType();
    public ScannerGroupType getScannerGroupType();
}
