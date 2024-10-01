#MoreDetails

This component presents a single scanner with all its details clearly
There is also the possibility of comparison between two reports from the same scannerName, producedName, and microserviceName.
At any given moment you can change the reports displayed by filter buttons
So you can compare any two scanners of the same name


#params

-id
the left scanner id (from Dasboard page)



#function

-useEffect

##OnInit 
Calling a server to receive the scanner by the id sent from the dashboard.
Calling a server to get all the names of the existing scanners in order to enable a completely flexible exchange of reports

##at a time of update the local state variable - scannerById or scannerByIdToCompare
Comparison function between two scanners is activated


-Server-Calls:

#getScannerByIdFromServer
#getScannersNames


-Functions to update local states:

#setScannerById
#setScannerByIdToCompare
#setDisplayComparison
#setDisplayLeftTable
#setCountOfTest
#setCompareStatus
#setScannerName
#setScannersNamesList
#setEqualTestArray
#setDifferentRightTestArray
#setDifferentLeftTestArray
#setRightFilter
#setRightDropLists

-Function

#handleComparison
#generateRightList
#generateLeftList
#toggleIsLoading