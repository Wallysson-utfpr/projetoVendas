const Pedido = require("../models/Pedido");

const pedidoController = {
  getPedidos: async (req, res) => {
    try {
      const pedidos = await Pedido.find();
      res.json(pedidos);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ocorreu um erro ao obter os pedidos" });
    }
  },

  createPedido: async (req, res) => {
    try {
      const { cliente, data } = req.body;
      const pedido = new Pedido({ cliente, data });
      await pedido.save();
      res.status(201).json({ message: "Pedido criado com sucesso", pedido });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ocorreu um erro ao criar o pedido" });
    }
  },

  updatePedido: async (req, res) => {
    try {
      const { id } = req.params;
      const { cliente, data } = req.body;
      const pedido = await Pedido.findByIdAndUpdate(
        id,
        { cliente, data },
        { new: true }
      );
      if (!pedido) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }
      res.json({ message: "Pedido atualizado com sucesso", pedido });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Ocorreu um erro ao atualizar o pedido" });
    }
  },

  deletePedido: async (req, res) => {
    try {
      const { id } = req.params;
      const pedido = await Pedido.findByIdAndDelete(id);
      if (!pedido) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }
      res.json({ message: "Pedido excluído com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ocorreu um erro ao excluir o pedido" });
    }
  },
};

module.exports = pedidoController;
