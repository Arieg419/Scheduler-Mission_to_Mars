# Scheduler Documentation
## ** Scheduling Problem: An interactive scheduler **

Scheduler was inspired by an article we read discussing colonizing Mars. One of the difficulties in colonizing the planet, would be to create a sensible work schedule for the colonizers.
We have defined a sensible working schedule, as a schedule that adheres to our list of constraints specified in our documentation. The purpose of this document, is to explain the technical aspects of our project, and how to install and use it.

We will focus on:
1.	System Overview
2.	Technologies
3.	Installation
4.	Usage

### Scheduler: Overview
When landing on the applications homepage, you can right away view the initial assignment, in a week format. Our simulation consists of 4 different tasks, which are color coded in the following manner:
1.	Engineering Task – Pink
2.	Botanical Task – Orange
3.	Communication Task – Blue
4.	Security Task – Green
Every task states which workers are assigned to it.

A user can also view the current assignment by month, day, or agenda mode by clicking on the navigation tab on the top right.

Lastly, we will examine the Constraint Form of our system, where a user can create new constraints live, and submit them to create a new worker placement.

Currently the system supports adding 3 types of constraints. The relevant constraint should be selected by the user, before submitting the form. Upon constraint selection the relevant form fields will become enabled. Supported constraint consist of:

1.	Worker i cannot work shift – When a worker cannot work on a specific day and time
2.	Worker i prefers working shift – When a worker has a preference for a specific time and day.
3.	Worker i cannot work with worker j – When two workers can not be assigned to working together.



### Scheduler: Technologies

Front End Technologies:
•	ReactJS
•	HTML
•	SCSS 
•	Vanilla JS

Server Side Technologies:
•	NodeJS 
•	Custom API – we have written a custome API to dynamically translate the user added constraints to constraints for the PuLP solver.
•	PythonShell module – Used to execute our solver

Solver Technologies:
•	PuLP - PuLP is a free open source software written in Python. It is used to describe optimisation problems as mathematical models. PuLP can then call any of numerous external solvers (CBC, GLPK, CPLEX, Gurobi etc) to solve this model and then use python commands to manipulate and display the solution.
Devops:
•	Git – for versions control
Webpack – code minification and bundling of assets

### Scheduler: Installation

#### Front End Technologies:
All code has already been transpiled and minified via Webpack. No need to install additional technologies.

#### Server Side Technologies:
•	In order to add custom constraints, the server needs to be on, and listening on local port 3000. The server is written in NodeJS, therefore the latest version of NodeJS should be installed on your machine.
Solver Technologies:
•	PuLP – I recommend installing PuLP via pip


### Scheduler: Usage

#### Non – Interactive Mode
1.	Unzip the scheduler.zip file
2.	Click on the examples directory
3.	Double click on index.html. This should open a tab in your Chrome browser where the project can be viewed.

#### Interactive Mode
In this mode, you can add constraints, and query the application to create a new assignment. This requires running the server and executing our python script to output new assignment data.
1.	Turn on Node server (after you have successfully installed Node) by running node server.js in the Scheduler/node_server directory.
2.	Navigate to the user interface in Google Chrome, and let’s add a constraint. For example, let’s decide that worker 16 and 33 should no longer work together.
3.	Add the constraint via the Add Constraint button
4.	Check your terminal. You should see a success message indicating that the constraint was added. You can view all the user added constraints in Scheduler/examples/demo/data.txt. This is the file we have programmed our solver to read user constraints from.
5. Run the final.py script from the terminal, as follows: python final.py
6. Refresh browser to view new worker placement


