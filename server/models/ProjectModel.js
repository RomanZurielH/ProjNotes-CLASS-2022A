// 1-ODM - Mongoose
import mongoose from 'mongoose';

// 2-Desestructura el modulo
// de schemas de Mongoose
const { Schema } = mongoose;

// 3-Creamos el Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// 4-Generar el modelo a partir de un Schema
// Compilar el modelo
export default mongoose.model('project', ProjectSchema);
