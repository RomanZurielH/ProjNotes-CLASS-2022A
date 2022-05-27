// Actions Methods
// Lista de proyectos
// GET /projects| GET /projects/indez
const index = (req, res) => {
  res.send('Lista de proyectos 🚧');
  // TODO: Agregar código de listas de proyectos
};

// Agrega ideas de proyectos
// GET /projects/add
const add = (req, res) => {
  res.send('Agregando ideas de proyectos 🚧');
  // TODO: Agregar las ideas de proyectos
};

// Exportando el controlador
export default {
  index,
  add,
};
