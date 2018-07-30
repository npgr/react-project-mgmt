import Api from '../common/api';
const api = new Api();

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const SET_PROJECTS_FILTER = 'SET_PROJECTS_FILTER';

export const fetchProjects = () => ({
  type: FETCH_PROJECTS,
  payload: api.get('/projects')//.catch(e => Promise.reject(e))
  //.then(res => res)
  // api.obtenerProyecto(idProyecto).then(res => res.json())
});

export const setProjectsFilter = (field, value) => ({
  type: SET_PROJECTS_FILTER,
  payload: { field, value }
});
