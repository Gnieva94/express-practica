import express from 'express';
import path from "path";
import fs from "fs";
import { apiController } from '../controllers/apiControllers.js';

const router = express.Router();
const root = path.resolve();
const controller = new apiController();  

router.get('/', controller.getIndexPage);

// router.post('/', (req, res) => {
//   //res.send('Hola desde el post');
//   const data = fs.readFileSync(root+'/data/archivo.json');
//   res.send(JSON.parse(data));
// });

// router.get('/productos/:id', (req, res) => {
//   const id = req.params.id;
//   res.send('Hola desde el get con id: ' + id);
// });

// router.get('/productos', (req, res) => {
//   const {algo} = req.query;
//   console.log(algo)
//   //res.send('Hola desde el get con query: ' + algo);
//   res.json({algo})
// });

router.post('/form', controller.postForm);

export default router;