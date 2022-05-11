// Importando el motoro de handlebars
import ExpHbs from 'express-handlebars';
// Importando el administrador de rutas
import path from 'path';

// Exportando funcion de configuracion
// app: es una instancia de express
export default (app) => {
  // 1 Registrando el motor de plantillas
  app.engine(
    'hbs',
    ExpHbs({
      extname: '.hbs',
      defaultLayout: 'mainLayout',
    })
  );

  // 2 Establecer el motor de plantillas
  app.set('view engine', 'hbs');

  // 3 Estableciendo la ruta de las vistas
  app.set('views', path.join(__dirname, '..', 'views'));

  // Retornando la referencia de la instancia de express
  return app;
};
