import express from "express";
const router = express.Router()
import ticketController from "../controllers/ticketController.js"

router.post("/new-ticket", ticketController.createTicket)
router.put("/update/:id", ticketController.updateTicket)
router.get("/find/:id", ticketController.findTicket)
router.delete("/delete/:id", ticketController.deleteTicket)

export default router;