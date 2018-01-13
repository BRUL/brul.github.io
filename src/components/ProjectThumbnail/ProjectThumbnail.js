import React from 'react';
import { Link } from 'react-router-dom';

import './ProjectThumbnail.css';

const ProjectThumbnail = ({ title, name, thumb }) => (
    <div className="col-sm-3 project hidden-xs">
      <Link to={`/projects/${name}`}>
        <img src={`img/${name}/res600/${thumb}`} alt={title} title={title} />
      </Link>
      <p>{ title }</p>
    </div>
  );

export default ProjectThumbnail;
