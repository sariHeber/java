#Dashboard component 

This component is a home page,
The component view has graphs that show all scanners using a two-dimensional axis system to give the comfortable, efficient and readable interface.
The X-axis represents the scanner activation date.
The Y-axis represents the values in the scanner.

At the top of the dashboard will represent a button filter and a scanner filter

In the graph:
The top graph contains all the scanners that return after the filters
The bottom graphs contains all the scanners by the name of the scanner,
and contains more information of this scanner - name , icon, sum of scanners that graph contains and  type of scanner

The scanners are obtained from the database with an API request.

#function

-useEffects:
##One of them is done only in the first processing and returns the list of scanners by deafult data in redux.

##Two of them listen to changes in the filters acceped from user's choices and accordingly update the local scanners state and the view on graphs

##three of them go through the list of scanners and sum up all the warnings separately, the separate failures and the successes separately and all together


-Server-Calls:

##getScannersByFilter- return all scanners by a redux filter that will update all changes from the user and update the status of the scanners

-Functions to update local states:

##setFilter,
##setFilterButten,
##setCount,
##setScanners

