import React, { useState } from 'react';

const AddProjects = (props) => {
  // Initial state for the form input values
  const initialState = {
    projectName: '',
    projectIdentifier: '',
    description: '',
    start_date: '',
    end_date: ''
  };

  // State to manage form input values
  const [state, setState] = useState(initialState);

  // Handle form submission
  const handleAdd = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!state.projectName || !state.projectIdentifier || !state.description || !state.start_date || !state.end_date) {
      // Handle the case where at least one field is empty (display an error message, prevent form submission, etc.)
      alert("Please fill in all fields");
      return;
    }

    // Destructure form input values
    const { projectName, projectIdentifier, description, start_date, end_date } = state;
    
    // Create a new project object with form input values
    const newProject = {
      projectName,
      projectIdentifier,
      description,
      start_date,
      end_date
    };

    // Call the addProject function passed via props to add the new project
    props.addProject(newProject);

    // Reset the form input values by setting state to initial values
    setState(initialState);

    // Toggle the form display using the toggleForm function passed via props
    props.toggleForm();
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the state with the new input value
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className={`card textcenter mt-3 ${props.formDisplay ? '' : 'add-project'}`}>
      <div className="card-body">
        <form id="aptForm" noValidate onSubmit={handleAdd}>
          {/* Form input for project name */}
          <div className="form-group form-row">
            <label className="col-md-2 col-form-label text-md-right" htmlFor="projectName"></label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="projectName"
                placeholder="Project's Name"
                value={state.projectName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Form input for project identifier */}
          <div className="form-group form-row">
            <label className="col-md-2 col-form-label text-md-right" htmlFor="projectIdentifier"></label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="projectIdentifier"
                placeholder="Project's ID"
                value={state.projectIdentifier}
                onChange={handleChange}
              />
            </div>
          </div>
          
          {/* Form input for project description */}
          <div className="form-group form-row">
            <label className="col-md-2 col-form-label text-md-right" htmlFor="description"></label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="description"
                placeholder="project description"
                value={state.description}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Form inputs for start and end dates */}
          <div className="form-group form-row">
            <label className="col-md-2 col-form-label text-md-right" htmlFor="aptDate">start date</label>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                name="start_date"
                id="start_date"
                value={state.start_date}
                onChange={handleChange}
              />
            </div>
            <label className="col-md-2 col-form-label text-md-right" htmlFor="aptTime">end date</label>
            <div className="col-md-4">
              <input
                type="date"
                className="form-control"
                name="end_date"
                id="end_date"
                value={state.end_date}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Form submit button */}
          <div className="form-group form-row mb-0">
            <div className="offset-md-2 col-md-10">
              <button type="submit" className="btn btn-primary d-block ml-auto">
                Add Project
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjects;
