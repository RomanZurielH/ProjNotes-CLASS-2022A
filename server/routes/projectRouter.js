// importar el Router de Express
import { Router } from 'express';

// Importando el enrutador del proyectp
import projectController from '../controllers/projectController';

// Creando instancia del Router
const router = new Router();

/* ------ GET -------- */
// Lista de proyectos
// GET: /projects | GET: /projects/index
router.get(['/', '/index'], projectController.index);

// Envia el formulario para registar una idea de proyecto
// get /projects/add
router.get('/add', projectController.add);

/* ------ POST ------ */
// Procesa el formulario que agrega ideas de proyectos
// POST /projects/add
router.post('/add', projectController.addPost);

// EXportadno el enrutador
export default router;
