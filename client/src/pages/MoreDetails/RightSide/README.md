#RightSide

This component presents filter buttons on the right side of the screen, in order to give the user the opportunity to choose a specific report to compare with left report.

This component is displayed and undispayed by click on the "vs" button in MoreDetails page.

You can filter by: Branch Name

The component gets the relavant choices (Product Name, MicroService Name) that the user made earlier in LeftSide component, also the suitable Branches options list, and save all this in local states.

The component's behavor is similar to LeftSide:

On pressing a button, an options list of a specific category is presented.

On choosing an opportunity, a server-call is executed and returns the options list of the next category. The options lists and user's choices are saved in local states.

Finally, on choosing a report id, a server-call returns the specific report - which is sent to TestListTable component for presentation. 

#Functions:

-useEffects:

##Two of them listen to changes in the paramters accepted from LeftSide and accordingly update the local states

##The rest of them listen to changes in user's choices ("filter" state), make suitable server-calls, and save the returned data in local state ("selectButtonOptions" state)

-Server-Calls:

##getFilteredReports,

##getScannerByIdFromServer

-Functions to update local states:

##setFilter,

##setSelectButtonOptions

