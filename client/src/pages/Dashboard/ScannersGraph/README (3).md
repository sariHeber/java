#ScannerGraph component

The component view has graphs showing scanners by name, using a 2D axis system to provide the convenient, efficient and readable interface.
The X-axis represents the scanner activation date.
The Y-axis represents the values ​​in the scanner.

In the graph:
At the top of the graph, display headings with additional information.
The body contains a chart with all scanners by name.
The chart contains three graphs:
One graph with green color - represents the successes in the scanner
Second graph with red color - represents the scanner failure
Graph three with yellow color - represents the warnings in the scanner

The graphs are sorted by the most recent date onwards.
Each time you click on a point in the graph, we will go to another screen that displays additional data on this specific report.

#function
##handleClick - navigate to show more detailes component when click on dot in graph



#AllScannerGraph component
The component view has graphs showing scanners, using a 2D axis system to provide the convenient, efficient and readable interface.
The X-axis represents the scanner activation date.
The Y-axis represents the values ​​in the scanner.

In the graph:
At the top of the graph, display headings with additional information.
The body contains a chart with all scanners.
The chart contains three graphs:
One graph with green color - represents the successes in the scanner
Second graph with red color - represents the scanner failure
Graph three with yellow color - represents the warnings in the scanner

The graphs are sorted by the most recent date onwards.
Each time you click on a point in the graph, we will go to another screen that displays additional data on this specific report.

The scanners are obtained from the Dashboard component after API request.


-useEffects:
##One of them maps the data that arrived as an object to a uniform data set so that we can display them in graphs.

##Two of them sorts all the data after the mapping done in the first useEffect

#function
##handleClick - navigate to show more detailes component when click on dot in graph
