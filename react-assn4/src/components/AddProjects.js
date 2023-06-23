import React, { useState } from 'react';

const AddProjects = (props) => {
  // State object to store form input values
  const [state, setState] = useState({
    projectName: '',
    projectIdentifier: '',
    description: '',
    start_date: '',
    end_date: ''
  });

  // Handle form submission
  const handleAdd = (e) => {
    e.preventDefault();

    // Create a new project object with form input values
    let tempApt = {
      projectName: state.projectName,
      projectIdentifier: state.projectIdentifier,
      description: state.description,
      start_date: state.start_date,
      end_date: state.end_date
    };

    // Call the addProject function passed via props to add the new project
    props.addProject(tempApt);

    // Reset the form input values by setting state to initial values
    setState({
      projectName: '',
      projectIdentifier: '',
      description: '',
      start_date: '',
      end_date: ''
    });

    // Toggle the form display using the toggleForm function passed via props
    props.toggleForm();
  };

  // Handle input changes
  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div
      className={'card textcenter mt-3 ' + (props.formDisplay ? '' : 'add-project')}
    >

      <div className="card-body">
        <form id="aptForm" noValidate onSubmit={handleAdd}>
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="projectName"
              readOnly
            >
       
            </label>
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

          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="projectIdentifier"
            >
            </label>
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                name="projectID"
                placeholder="Project's ID"
                value={state.projectIdentifier}
                onChange={handleChange}
              />
              </div>
            </div>
          
          <div className="form-group form-row">
            <label
              className="col-md-2 col-form-label text-md-right"
              htmlFor="description"
            >
          
            </label>
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

          <div className="form-group form-row">
            <label className="col-md-2 col-form-label text-md-right" htmlFor="aptDate">
            start date
            </label>
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
            <label className="col-md-2 col-form-label text-md-right" htmlFor="aptTime">
            end date
            </label>
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
