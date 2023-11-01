# react-Project-Management-Application
COMPX322-23A: Assignment Four
Due Date: Friday June 9tht, 5pm
Libraries and Frameworks: Project Management Application
For this coursework you are required to build a project management application which
allows users to manage their projects. You will use:
• React to build the front-end user interface.
• HTML
• Cascading Style Sheets (CSS)
• JavaScript
• Bootstrap for designing [Optional]
• jQuery [Optional]
Application Description
• This is a simple application for managing projects. Users can see all the available
projects, add more projects, delete projects and sort projects.
• The application lists all the projects from a file as shown in the screenshot. Note:
this is just an example. You have to write your own CSS to display the projects in
an aesthetically pleasing manner.
• User can also delete the project by clicking on the “X” button as shown in the
above screenshot.
• When a user clicks on the “Create a New Project” button, a form should appear
for adding a new project, as shown in the screenshot.
• The form consists of a text boxes for Project Name, Project ID, Project
Description, Start Date, End Date and a Submit Button asshown in the screenshot
below (Note: aspects of the design may vary depending upon the forms of
interactivity you develop, based on your own creativity).
• On clicking the submit button, a new project should appear in the list of projects
displayed.
• The user can also search and sort the projects. Projects can be sorted in ascending
or descending order by project name and start date.
Implementation
Node.js and npm are installed on the R-block Linux lab machines.
Set up the project using ‘Create React App’ in a terminal:
npx create-react-app react-assn4
You should see the following files and directories in your react-assn4 folder.
Change directory to react-assn4 in your terminal using the following command:
cd react-assn4
The most frequent command you'll be using is npm start. That's going to start a
development server that will live preview as you code. You will also likely to want to
install some extra dependencies using npm install command. Remember to include --
save, so your package.json file is updated appropriately.
You will also benefit from installing the React developer tools extension in your web
browser, which gives you some additional abilities to inspect elements with respect to
the React framework.
Directory structure is really important. You need to create a components folder and css
folder inside the src folder. All your JavaScript files should be in the components folder
and CSS files in the css folder.
In Moodle you have been provided with the data.json file which contains some sample
examples of projects. Download this file from Moodle and copy it in the public folder of
your application. Your public folder will contain the following files:
What to submit and how
All pertinent material you have developed for this assignment must be submitted
electronically using Moodle. The submitted files must be sufficient to recreate your app
by running npm install followed by npm start. Do not include your node_modules
directory, as this can run to hundreds of MBs, and is not needed to reconstitute your
project using npm install.
You may choose between submitting a ZIP file or a ‘tar-ball’ (.tar.gz). For the former, use
the name react-assn4.zip and react-assn4.tar.gz for the latter. Marks will be deducted
for submitted assignments that do meet these requirements.
In the COMPX322 Moodle site, you will see an Assignment 4 hyperlink to the submission
page. This link allows you to upload your tar.gz/zip file. You can do this as many times as
you want up to the submission deadline for the assignment.
When you submit a file, Moodle will ask you to confirm that what you have submitted is
your own work, and will provide you with a ‘receipt’ that establishes that you have
indeed submitted something. No other mechanism for submission will be accepted.
How your work will be assessed
The assignment will be marked out of 50 as follows:
Application meets minimum functional requirements, designing
and coding for the components.
15 marks
Display list of projects 5 marks
Delete function to delete the project from the list 5 marks
Processing the form to add projects 10 marks
Sorting the projects in ascending or descending order by Project
Name and Start Date
5 marks
Appropriate folder structure and code is clearly formatted and
commented
5 marks
Lab Demonstration (mandatory) 5 marks
The deduction for incorrectly submitted files is capped at 2 marks.
