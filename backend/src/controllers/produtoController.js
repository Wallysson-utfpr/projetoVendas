const Produto = require("../models/Produto");

const produtoController = {
  getProdutos: async (req, res) => {
    try {
      const produtos = await Produto.find();
      res.json(produtos);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ocorreu um erro ao obter os produtos" });
    }
  },

  createProduto: async (req, res) => {
    try {
      const { nome, preco } = req.body;
      const produto = new Produto({ nome, preco });
      await produto.save();
      res.status(201).json({ message: "Produto criado com sucesso", produto });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ocorreu um erro ao criar o produto" });
    }
  },

  updateProduto: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, preco } = req.body;
      const produto = await Produto.findByIdAndUpdate(
        id,
        { nome, preco },
        { new: true }
      );
      if (!produto) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }
      res.json({ message: "Produto atualizado com sucesso", produto });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Ocorreu um erro ao atualizar o produto" });
    }
  },

  deleteProduto: async (req, res) => {
    try {
      const { id } = req.params;
      const produto = await Produto.findByIdAndDelete(id);
      if (!produto) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }
      res.json({ message: "Produto excluído com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ocorreu um erro ao excluir o produto" });
    }
  },
};

module.exports = produtoController;
