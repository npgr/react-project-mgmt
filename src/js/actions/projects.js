import Api from '../common/api';
const api = new Api();

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const SET_PROJECTS_FILTER = 'SET_PROJECTS_FILTER';
export const TOGGLE_CREATE_PROJECT = 'TOGGLE_CREATE_PROJECT';
export const TOGGLE_PROJECT_DETAIL = 'TOGGLE_PROJECT_DETAIL';
export const SHOW_PROJECT_DETAIL = 'SHOW_PROJECT_DETAIL';

export const fetchProjects = () => ({
  type: FETCH_PROJECTS,
  payload: api.get('/projects')
  //api.fetch('http://localhost:3031/api/projects')
  //.catch(e => Promise.reject(e))
  //.then(res => res)
  // api.obtenerProyecto(idProyecto).then(res => res.json())
});

export const setProjectsFilter = (field, value) => ({
  type: SET_PROJECTS_FILTER,
  payload: { field, value }
});

export const toggleProjectDetail = () => ({
  type: TOGGLE_PROJECT_DETAIL
});

export const showProjectDetail = (project) => ({
  type: SHOW_PROJECT_DETAIL,
  payload: { project }
});

export const toggleCreateProject = () => ({
  type: TOGGLE_CREATE_PROJECT
});
