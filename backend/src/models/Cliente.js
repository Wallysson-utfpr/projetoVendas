const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
});

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
