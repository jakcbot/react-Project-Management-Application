import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

const ListProjects = (props) => {
  return (
    <div className="project-list item-list mb-3">
      {props.projects.map(item => (
        <div className="project-item col media py-3" key={item.projectIdentifier}>
          <div className="mr-3">
            <button
              className="project-delete btn btn-sm btn-danger"
              onClick={() => props.deleteProject(item)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="project-info media-body">
          <span className="project-name">{item.projectName}</span>
            <div className="project-head d-flex">
              
              <span className="start_date ml-auto">start_date:  
                <Moment
                
                  date={item.start_date}
                  parse="YYYY-MM-dd hh:mm"
                  format="MMM-D h:mma"
                />
              </span>
              <br></br>
              <span className="end-date ml-auto">end_date:  
                <Moment
                
                  date={item.end_date}
                  parse="YYYY-MM-dd hh:mm"
                  format="MMM-D h:mma"
                />
              </span>
            </div>

            <div className="description">
              <span className="description-item">description: </span>
              <span>{item.description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProjects;