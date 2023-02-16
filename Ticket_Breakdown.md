# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Always when a ticket comes from another area it is nice to validate what you are thinking is what they expect. In this case I believ that if there is a custom ID in the DB to an Agent, that would substitute the DB id on the report, but depending on the demand it could be a different result expected (por example return both). Assuming it is the case explain

1st ticket -- A new column would be needed to be added for the custom id on the agents table, it should be a string column and a good idea would be to limits it in characters under 50. This is a quick part of the task, taking less than an hour. In staging populate it directly in the DB so when developing there already are cases of agents with custom-ids.

2nd ticket -- if needed -- Update the getShiftsByFacility function to return the custom column as part of the result, this might not be needed depending on the DB and/or query. A Mongodb for example would already return the new column if what is returned isn't specified. 

3rd ticket -- Update the generateReport so that if there is a custom id, return it in the agents column, if not, return the database id
 
4th ticket -- In the front end, where the CRUD of Agents is done, there needs to be a support of the new column, adding a new option when creating, editing or deleting and agent from the DB. This task depending on the will take from 30 minutes to 1 hour. There should be put limitations to what the facilitie can add for the id, such as special characters if it is a problem, or character limit.

It is a low effort job with the taks being completed in less than an hour by a senior dev and around 1 day for a JR dev.