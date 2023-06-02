const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  data: { type: Date, required: true },
});

const Pedido = mongoose.model("Pedido", pedidoSchema);

module.exports = Pedido;
