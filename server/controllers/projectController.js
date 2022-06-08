import log from '../Config/winston';
// importamos el modelo Project
import ProjectModel from '../models/ProjectModel';

//* Actions Methods */
// Lista de proyectos
// GET /projects | GET /projects/index
const index = async (req, res) => {
  // 1 Pedirle a la base de datos
  // que me de todos los proyectos que tiene
  // db.projects.find*()
  try {
    log.info('Mostrando lista de proyectos 🕰');
    const projectsDocs = await ProjectModel.find();
    log.info('Mostrando lista de proyectos con éxito 🎊');
    res.json(projectsDocs);
  } catch (error) {
    log.error(`💥 Error al listar proyectos: ${error.message}`);
    res.status(500).json(error);
  }
};

// Agrega ideas de proyectos
// GET /projects/add
const add = (req, res) => {
  res.render('projects/addProjectView', {});
  // TODO: Agregar codigo para agregar proyectos
};

// Procesa el formulario que Agrega ideas de proyectos
// POST /projects/add
const addPost = async (req, res) => {
  // Desestructurando la informacion
  // del formulario o de un posible error
  const { errorData, validData } = req;
  // crear view models para este action method
  let project = {};
  let errorModel = {};
  // Verifico si hay erro de validacion
  if (errorData) {
    log.error('💥 Se retorna objeto de error de validacion 💥');
    // Rescatando el objeto validado
    project = errorData.value;
    // Usamos reduce para generar un objeto
    // de errores a partir de inner
    errorModel = errorData.inner.reduce((prev, curr) => {
      // Creamos una vaiabre temporal para evitar
      // el error "no-param-reassign" el cual me
      // exorta a evitar reasignar los valores de
      // los argumentos una funcion
      const newVal = prev;
      newVal[`${curr.path}Error`] = curr.message;
      return newVal;
    }, {});
    // La validación falló
    return res.render('projects/addProjectView', { project, errorModel });
  }
  log.info('Se retorna un objeto Proyecto válido');
  // Crear un documento con los datos provistos
  // por el formulario y guardar dicho documento
  // en projectModel
  const projectModel = new ProjectModel(validData);
  // Siempre que se ejecuta una operacion
  // que depende de un tercero, es una buena practica
  // envolver esa operacion en un bloque try
  try {
    log.info('Salvando el Proyecto...⏳');
    project = await projectModel.save();
    log.info('🎉 Proyecto salvado con éxito 🎉');
    // Redireccionando al recurso que hace la lista de proyectos
    // GET / projects
    return res.redirect(`/projects`);
  } catch (error) {
    log.error(`Ha fallado el intento de salvar un proyecto:${error.message}`);
    return res.status(500).json({ error });
  }
};

// Exportando el controlador
export default {
  index,
  add,
  addPost,
};
