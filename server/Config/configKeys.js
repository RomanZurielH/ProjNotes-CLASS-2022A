// Importar el paquete dostenv
import dotenv from 'dotenv';

// Cargo las dependencias
// de entorno
// En  caso de no estar presentes
// el modulo fallara de manera
// silenciosa
dotenv.config();

// Crear un objeto que contendra
// los datos de configuracion que extraera
// de las variables de entorno
export default {
  homeUrl: `${process.env.APP_URL} :${process.env.PORT}`,
  port: process.env.PORT,
  ip: process.env.IP,
  databaseUrl: process.env.DATABASE_URL,
};
