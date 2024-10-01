#LeftSide

This component presents filter buttons on the left side of the screen, in order to give the user the opportunity to choose a specific report and see it on the screen.

You can filter by: Product Name, Microservise Name and Branch Name

The component gets a scanner from MoreDetails page and represent its relevant categories into the buttons.

On pressing a button, an options list of a specific category is presented.

On choosing an opportunity, a server-call is executed and returns the options list of the next category. The options lists and user's choices are saved in local states.

Finally, on choosing a report id, a server-call returns the specific report - which is sent to TestListTable component for presentation.

In addition, on choosing Microservice Name, the component updates RightSide component (so that filters in right side will suit chosen Product and Microservice Name in left side) 

#Functions:

-useEffects:

##One of them is done only in first render and returns the list of Product Names

##Two of them lisen to changes in the scanner accepted from props and accordingly update the local states

##The rest of them listen to changes in user's choices ("filter" state), make suitable server-calls, and save the returned data in local state ("selectButtonOptions" state)

-Server-Calls:

##getAllProductNames,

##getFilteredMicroserviceNames,

##getFilteredBranchNames,

##getFilteredReports,

##getScannerByIdFromServer

-Functions to update local states:

##setFilter,

##setSelectButtonOptions

-Functions to update RightSide states (see RightSide/README.md):

##setRightFilter

##setRightDropLists

