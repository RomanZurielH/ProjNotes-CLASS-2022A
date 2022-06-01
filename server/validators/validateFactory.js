// Usando el patrón Factory para la creación
// de un middleware de validación
const Validator =
  ({ shape, getObject }) =>
  async (req, res, next) => {
    // 1 Construir el objeto a validar
    const dataObject = getObject(req);
    // 2 Se realizar el proceso de validación
    try {
      // 2.1 Se valida el objeto con el shape
      // validate acepta 2 argumentos
      // arg1: objeto a validar
      // arg2: opciones de validación
      const validData = await shape.validate(dataObject, {
        abortEarly: false,
      });
      // Incrustar el objeto valido en la petición
      req.validData = validData;
    } catch (error) {
      // Crear un objeto que reporta el error
      req.errorData = error;
    }
    // 3 Continuamos la cadena de middleware
    return next();
  };

// Exportando Factory de validación
export default Validator;
