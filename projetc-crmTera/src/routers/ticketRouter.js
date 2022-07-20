import ticketController from '../controllers/ticketController.js';
import express from 'express';
const router = express.Router();

router.post('/create', ticketController.createTicket);
router.put('/update/:id', ticketController.updateTicket);
router.get('/find/:id', ticketController.findTicket);
router.get('/all', ticketController.getAllTickets);
router.delete('/delete/:id', ticketController.deleteTicket);

export default router;
