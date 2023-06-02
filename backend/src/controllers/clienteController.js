const Cliente = require("../models/Cliente");

const clienteController = {
  getClientes: async (req, res) => {
    try {
      const clientes = await Cliente.find();
      res.json(clientes);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ocorreu um erro ao obter os clientes" });
    }
  },

  createCliente: async (req, res) => {
    try {
      const { nome } = req.body;
      const cliente = new Cliente({ nome });
      await cliente.save();
      res.status(201).json({ message: "Cliente criado com sucesso", cliente });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ocorreu um erro ao criar o cliente" });
    }
  },

  updateCliente: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome } = req.body;
      const cliente = await Cliente.findByIdAndUpdate(
        id,
        { nome },
        { new: true }
      );
      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }
      res.json({ message: "Cliente atualizado com sucesso", cliente });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Ocorreu um erro ao atualizar o cliente" });
    }
  },

  deleteCliente: async (req, res) => {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByIdAndDelete(id);
      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado" });
      }
      res.json({ message: "Cliente excluído com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ocorreu um erro ao excluir o cliente" });
    }
  },
};

module.exports = clienteController;
