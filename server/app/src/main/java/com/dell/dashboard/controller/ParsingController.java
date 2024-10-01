package com.dell.dashboard.controller;

import com.dell.dashboard.model.ScannerGroupType;
import com.dell.dashboard.model.UnifiedDataScanner;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@CrossOrigin
@RestController
@RequestMapping("/parsing")
@Slf4j
public class ParsingController {
    @RequestMapping(
            method = RequestMethod.POST,
            produces = { "*/*", "application/json" }
    )

    public ResponseEntity<UnifiedDataScanner> uploadScannerFile(
            @RequestPart MultipartFile file,
            @RequestParam String unifiedData
            ){
      //  unifiedDataScanner.setScannerType(ScannerGroupType.SECURITY);
        UnifiedDataScanner u=new UnifiedDataScanner();
        u.setScannerType(ScannerGroupType.SECURITY);
        return ResponseEntity.ok().body(u);
    }
}
