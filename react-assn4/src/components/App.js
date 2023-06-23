import React, { useEffect, useState } from 'react';
import '../css/App.css';

import { without } from 'lodash';
import AddProjects from './AddProjects';
import ListProjects from './ListProjects';
import Search from './Search';

const App = () => {
  // State variables
  const [myProjects, setMyProjects] = useState([]); // Array to store projects
  const [formDisplay, setFormDisplay] = useState(false); // Toggle for displaying add project form
  const [lastIndex, setLastIndex] = useState(0); // Index for new projects
 
  // Toggle the display of the add project form
  const toggleForm = () => {
    setFormDisplay((prevDisplay) => !prevDisplay);
  };

  // Add a new project
  const addProject = (apt) => {
    apt.id = lastIndex; // Assign a unique identifier to the project
    setMyProjects((prevProjects) => [apt, ...prevProjects]); // Add the new project to the projects array
    setLastIndex((prevIndex) => prevIndex + 1); // Increment the index for the next project
  };

  // Delete a project
  const deleteProject = (apt) => {
    const tempApts = without(myProjects, apt); // Create a new array without the deleted project
    setMyProjects(tempApts); // Update the projects array
  };

  //search project
  const searchProjects = (searchTerm) => {
    // Perform search logic here
    const filteredProjects = myProjects.filter((project) => {
      // Match the project name or start date with the search term
      return (
        project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.start_date.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    // Update the project list with the filtered projects
    setMyProjects(filteredProjects);
  };
  // Sort projects
const sortProjects = (sortBy) => {
  let sortedProjects = [...myProjects]; // Create a copy of the projects array

  // Perform sorting based on the sort criteria
  if (sortBy === 'Name (A-Z)') {
    sortedProjects.sort((a, b) => a.projectName.localeCompare(b.projectName));
  } else if (sortBy === 'start_date') {
    sortedProjects.sort((a, b) => a.start_date.localeCompare(b.start_date));
  }

  // Update the project list with the sorted projects
  setMyProjects(sortedProjects);
};

  useEffect(() => {
    // Fetch data from a JSON file and initialize projects array
    const getAppts = async () => {
      const res = await fetch('./data.json'); // Fetch data from JSON file
      const data = await res.json(); // Parse the JSON data
      const tempApts = data.map((item) => {
        item.id = lastIndex; // Assign a unique identifier to each project
        setLastIndex((prevIndex) => prevIndex + 1); // Increment the index for the next project
        return item;
      });
      setMyProjects(tempApts); // Set the projects array with the fetched data
      return data; // Return the fetched data (optional)
    };

    getAppts(); // Call the async function to fetch and initialize projects
  }, []);

  //render components
  return (
    <main className="page bg-white" id="petratings">
      <h1>Projects</h1>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              Create new Project
              <AddProjects
                formDisplay={formDisplay}
                toggleForm={toggleForm}
                addProject={addProject}
              />
              <br></br>
              <Search 
              searchProjects={searchProjects} 
              sortProjects={sortProjects}
              />

              <br></br>
              <ListProjects
                projects={myProjects}
                deleteProject={deleteProject}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
