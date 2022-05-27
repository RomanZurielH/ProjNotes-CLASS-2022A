// Importando el enrutador de home
import homeRouter from './homeRoutes';
// Importando el enrutador de Project
import projectRouter from './projectRouter';

// Funcion que agrega todos los enrutadores a aplicacion de express
// a la aplicacion de express
const addRoutes = (app) => {
  /* Agergando enrutador a home */
  app.use('/', homeRouter);
  /* agregando al enrutador project */
  app.use('/projects', projectRouter);
};

export default {
  addRoutes,
};
