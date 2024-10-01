#TestListTable

This component display the comparison table between tests of two scanners
where the first 3 columns belong to one scanner
The middle column is the comparison icons (equal or different)
And the last three columns are from the second scanner

Each scanner has:
column of the test number
column of the test description
column of the test status

#props:

-listForTestLeft
-listForTestRight

the scanner's list of tests to compare

-scannerByIdToCompare
-displayLeftTable

According to them we know which columns to display

