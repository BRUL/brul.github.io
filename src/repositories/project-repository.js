import projects from './data/projects';

export default class ProjectRepository {
  getAll() {
    return Object
      .keys(projects)
      .map(key => projects[key]);
  }

  byId(id) {
    return projects[id];
  }
};
