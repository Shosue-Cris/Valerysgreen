import { Router } from 'express';
import path from 'path';

const router = Router();

router.get('/', (req, res) => {
  res.render('pages/index'); 
});

router.get('/servicios', (req, res) => {
  res.render('pages/servicios'); 
});

router.get('/pago', (req, res) => {
  res.render('pages/pago');
});

router.get('/login', (req, res) => {
  res.render('pages/login');
});

router.get('/contactos', (req, res) => {
  res.render('pages/contactos');
});



export default router;
