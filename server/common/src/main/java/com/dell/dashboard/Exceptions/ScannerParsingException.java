package com.dell.dashboard.Exceptions;

import lombok.SneakyThrows;

public class ScannerParsingException extends Exception {
    public ScannerParsingException(String errorMessage, Exception e){
        super(errorMessage, e);
    }
}
