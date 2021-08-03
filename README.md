# fpieschaconr_torre_technical_test
This is the solution for the technical test proposed for the Torre full stack developer intern position. It was done using the MERN stack and Graphql.

It is a Client - Server architecture. The back-end consists of a connection to the Torre api search functions provided for the test and a connection to its own Mongodb database where it updates the aggregators provided from Torre performing a daily task with a cron scheduler. It then provides endpoints to get this information via Graphql. The front-end fetches this information and displays a series of graphs about this.

For future development, the data presentation can be expanded and the styling improved. As for other functionalities (initially what was intended), a matching system for mentorship profiles can be implemented to improve the social network part of Torre. It could search for likeness in personalities and cross compare "skills to develop" with the mentor's current skills.

Unfortunately I couldn't commit as much time as I would have liked to this test so the front-end was underdeveloped and the use of the data api was not as bold as I would have liked. In spite of this, I hope the technical factor of this implementation is of your liking, especially the back-end :) 

This test process log:

1-Aug

	15:00 - 15:30	installation and setting up environment, base client - server - db using MERN stack

	15:30 - 16:15	research for ideas to implement and familiarization with torre api functions

	20:40 - 23:00 setting up template for implementation proposed

2-Aug

	9:40	restructuring of proposed implementation due to time contraints, setting up DB copy and switching backend for apollo implementation

	11:30 - 12:50	backend implementation for mentor functionality, connected torre api for users successfully

    14:00 - 17:00	connected torre aggregator stats to back end daily task and local db, setting up graphql endpoints

	18:30 - 20:30	backend  for stats functionality done, working on frontend

    20:30 - 23:00	setting up charts for user stats
3-Aug

	9:20 - 12:00	deployment and delivery
