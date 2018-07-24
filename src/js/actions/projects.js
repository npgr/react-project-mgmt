import Api from '../common/api';
const api = new Api();

export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export const fetchProjects = () => ({
  type: FETCH_PROJECTS,
  payload: api.get('/projects')//.catch(e => Promise.reject(e))
  //.then(res => res)
  // api.obtenerProyecto(idProyecto).then(res => res.json())
});
