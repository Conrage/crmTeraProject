import ticket from "../models/ticket.js";

const createTicket = async (req, res) => {
    const { client, assigned, issue } = req.body;

    const newTicket = await ticket.create({ client, assigned, issue } );
    return res.status(201).send({"message": "Ticket criado com sucesso", newTicket})
}


const findTicket = async (req, res) => {
    const ticketId = req.params.id;
    try {
       const Ticket =  await ticket.findById(ticketId)
       return res.status(200).send({ Ticket })
    } catch(error){
        console.log(error)
        return res.status(400).send({"message":"Erro ao buscar o ticket. Por favor, tente novamente."})
    }
}

const getAllTickets = async (req, res) => {
    try {
       const Tickets =  await ticket.find()
       return res.status(200).send(Tickets)
    } catch(error){
        console.log(error)
        return res.status(400).send({"message":"Erro ao buscar o ticket. Por favor, tente novamente."})
    }
}

const updateTicket = async (req, res) => {
    const { issue, status, priority, } = req.body;
    const newTicket = await ticket.findByIdAndUpdate(req.params.id, { issue, status, priority });

    return res.status(200).send({"message": "Ticket atualizando com sucesso."})
}

const deleteTicket = async (req, res) => {
    const ticketID = req.params.id
    await ticket.findOneAndDelete(ticketID)
    return res.status(204).send({"message": "Ticket deletado com sucesso"})
}


export default {
    createTicket,
    updateTicket,
    findTicket,
    deleteTicket,
    getAllTickets
};