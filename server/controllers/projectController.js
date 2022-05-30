// Actions Methods

// Lista de proyectos
// GET /projects| GET /projects/index
const index = (req, res) => {
  res.send('Lista de proyectos 🚧');
  // TODO: Agregar código de listas de proyectos
};

// Agrega ideas de proyectos
// GET /projects/add
const add = (req, res) => {
  res.render('projects/addProjectView', {});
  // TODO: Agregar las ideas de proyectos
};

// Procesa el formulario que agrega ideas de proyectos
// POST /projects/add
const addPost = (req, res) => {
  // Desestructurando la informacion
  // del formulario
  const { name, description } = req.body;
  // Regresar un objeto con los datos
  // obtenidos del formulario
  res.status(200).json({ name, description });
};

// Exportando el controlador
export default {
  index,
  add,
  addPost,
};
