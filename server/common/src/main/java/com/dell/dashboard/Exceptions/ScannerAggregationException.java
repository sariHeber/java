package com.dell.dashboard.Exceptions;

public class ScannerAggregationException extends Exception {
    public ScannerAggregationException(String errorMessage, Exception e){
        super(errorMessage, e);
    }
}
